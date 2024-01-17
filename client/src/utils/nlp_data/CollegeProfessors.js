const professors = [''];
const professors_schedule = [''];

var professors_lower = [];
professors.forEach(professor => {
  professors_lower.push(professor.split(' ')[0].toLowerCase());
});

const AddCollegeProfessors = manager => {
  professors.forEach((professor, index) => {
    manager.addDocument(
      'en',
      `schedule of ${professor}?`,
      `ask.prof.schedule.${professors_lower[index]}`,
    );
    manager.addAnswer(
      'en',
      `ask.prof.schedule.${professors_lower[index]}`,
      `${professors_schedule[index]}`,
    );
  });
};

export default AddCollegeProfessors;
