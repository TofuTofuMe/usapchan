fetchTableData('Courses').then(() => {
    setupTable('Courses', '#course-table-body').then(() => {
        setupSelectorOptions('courseSelect', 'Courses', 'code');
        handleSelectorChange(
            'courseSelect',
            ['code', 'title'],
            'code',
            'dropCourse'
        );
        setFormAction(
            'courseSelect',
            'resetCourse',
            'dropCourse',
            'courseForm',
            'add_course',
            'drop_course'
        );
    });
});

fetchTableData('Faculties').then(() => {
    setupTable('Faculties', '#faculty-table-body').then(() => {
        setupSelectorOptions('facultySelect', 'Faculties', 'name');
        handleSelectorChange(
            'facultySelect',
            ['rank', 'name', 'nickname'],
            'name',
            'dropFaculty'
        );
        setFormAction(
            'facultySelect',
            'resetFaculty',
            'dropFaculty',
            'facultyForm',
            'add_faculty',
            'drop_faculty'
        );
    });
});

fetchTableData('Schedules').then(() => {
    setupTable('Schedules', '#schedule-table-body').then(() => {
        setupSelectorOptions('scheduleSelect', 'Schedules', 'id');
        setupSelectorOptions('courseCode', 'Courses', 'code');
        setupSelectorOptions('facultyName', 'Faculties', 'name');
        handleSelectorChange(
            'scheduleSelect',
            ['day', 'startTime', 'endTime', 'facultyName', 'courseCode'],
            'id',
            'dropSchedule'
        );
        setFormAction(
            'scheduleSelect',
            'resetSchedule',
            'dropSchedule',
            'scheduleForm',
            'add_schedule',
            'drop_schedule'
        );
    });
});
