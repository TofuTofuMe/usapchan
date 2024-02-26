const sqlHandler = require('./sqlHandler');

const addDatabaseCorpus = async (nlpManager) => {
    try {
        const corpora = await sqlHandler.Corpus.findAll({
            attributes: ['lang', 'intent', 'query', 'answer'],
        });

        corpora.forEach((corpus) => {
            nlpManager.addDocument(corpus.lang, corpus.query, corpus.intent);
            nlpManager.addAnswer(corpus.lang, corpus.intent, corpus.answer);
        });
        console.log('Added corpus from database!');
    } catch (error) {
        console.error('Error adding Query-Answer: ', error.message);
    }
};

const addFaculty = async (nlpManager) => {
    const faculties = await sqlHandler.Faculty.findAll({
        include: [
            {
                model: sqlHandler.Schedule,
                as: 'schedules',
                include: [sqlHandler.Course],
            },
        ],
    });

    var faculties_lower = [];
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    faculties.forEach((faculty, index) => {
        faculties_lower.push(faculty.name.split(' ')[0].toLowerCase());

        nlpManager.addDocument(
            'en',
            `schedule of ${faculty.name}?`,
            `ask.faculty.schedule.${faculties_lower[index]}.all`
        );
        nlpManager.addAnswer(
            'en',
            `ask.faculty.schedule.${faculties_lower[index]}.all`,
            `${faculty.schedules}`
        );

        days.forEach((day) => {
            const daySchedules = faculty.schedules.filter(
                (schedule) => schedule.day === day
            );
            nlpManager.addDocument(
                'en',
                `schedule of ${faculty.name} on ${day}`,
                `ask.faculty.schedule.${faculties_lower[index]}.${day}`
            );
            if (daySchedules.length) {
                nlpManager.addAnswer(
                    'en',
                    `ask.faculty.schedule.${faculties_lower[index]}.${day}`,
                    `${JSON.stringify(daySchedules)}`
                );
            } else {
                nlpManager.addAnswer(
                    'en',
                    `ask.faculty.schedule.${faculties_lower[index]}.${day}`,
                    `${faculty.rank} ${faculty.name} does not have a schedule on ${day}.`
                );
            }
        });
    });
};

module.exports = {addDatabaseCorpus, addFaculty};
