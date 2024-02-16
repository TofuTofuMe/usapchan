const {Course, Faculty, Schedule} = require('../utils/sqlHandler');

exports.addCourse = async (req, res) => {
    try {
        console.log(req.body);
        const {code, title} = req.body;
        await Course.create({
            code,
            title,
        });
        res.status(201).redirect('/college/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to add course',
            error: error.message,
        });
    }
};

exports.addFaculty = async (req, res) => {
    try {
        const {rank, name, nickname, schedule} = req.body;
        await Faculty.create({
            rank,
            name,
            nickname,
            schedule,
        });
        res.status(201).redirect('/college/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to add faculty',
            error: error.message,
        });
    }
};

exports.addSchedule = async (req, res) => {
    try {
        const {
            day,
            room,
            section,
            startTime,
            endTime,
            courseCode,
            facultyName,
        } = req.body;

        await Schedule.create({
            day,
            room,
            section,
            startTime,
            endTime,
            facultyName,
            courseCode,
        });
        res.status(201).redirect('/college/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to add schedule',
            error: error.message,
        });
    }
};

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll({
            attributes: [['id', 'courseId'], 'code', 'title'],
        });
        res.status(200).send(courses);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching courses',
            error: error.message,
        });
    }
};

exports.getFaculties = async (req, res) => {
    try {
        const faculties = await Faculty.findAll({
            attributes: [['id', 'facultyId'], 'rank', 'name', 'nickname'],
        });
        res.status(200).send(faculties);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching faculties',
            error: error.message,
        });
    }
};

exports.getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.findAll({
            attributes: [
                ['id', 'scheduleId'],
                'day',
                'room',
                'section',
                'startTime',
                'endTime',
                'facultyName',
                'courseCode',
            ],
        });
        res.status(200).send(schedules);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching schedules',
            error: error.message,
        });
    }
};

exports.dropCourse = async (req, res) => {
    try {
        const {code, title} = req.body;

        const course = await Course.findOne({
            where: {
                code: code,
                title: title,
            },
        });

        if (!course) {
            return res.status(400).json({
                success: false,
                message: 'Course not found',
            });
        }
        await course.destroy();
        res.status(200).redirect('/college/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to destroy course',
            error: error.message,
        });
    }
};

exports.dropFaculty = async (req, res) => {
    try {
        const {rank, name} = req.body;

        const faculty = await Faculty.findOne({
            where: {
                rank: rank,
                name: name,
            },
        });

        if (!faculty) {
            return res.status(400).json({
                success: false,
                message: 'Faculty not found',
            });
        }
        await faculty.destroy();
        res.status(200).redirect('/college/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to destroy faculty',
            error: error.message,
        });
    }
};

exports.dropSchedule = async (req, res) => {
    try {
        const {day, startTime, endTime, facultyId, courseId} = req.body;

        const schedule = await Schedule.findOne({
            where: {
                day: day,
                startTime: startTime,
                endTime: endTime,
                facultyId: facultyId,
                courseId: courseId,
            },
        });

        if (!schedule) {
            return res(400).json({
                success: false,
                message: 'Schedule not found',
            });
        }
        await schedule.destroy();
        res.status(200).redirect('/college/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to destroy schedule',
            error: error.message,
        });
    }
};
