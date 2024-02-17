fetchTableData('Courses').then(() => {
    setupTable('Courses', '#course-table-body').then(() => {
        setupSelectorOptions('courseSelect', 'Courses', 'courseId');
        handleSelectorChange(
            'courseSelect',
            ['courseId', 'code', 'title'],
            'courseId',
            'submitCourse',
            'dropCourse'
        );
        setFormAction(
            'courseSelect',
            'resetCourse',
            'submitCourse',
            'dropCourse',
            'courseForm',
            'add_course',
            'update_course'
        );
    });
});

fetchTableData('Faculties').then(() => {
    setupTable('Faculties', '#faculty-table-body').then(() => {
        setupSelectorOptions('facultySelect', 'Faculties', 'name');
        handleSelectorChange(
            'facultySelect',
            ['facultyId', 'rank', 'name', 'nickname'],
            'facultyId',
            'submitFaculty',
            'dropFaculty'
        );
        setFormAction(
            'facultySelect',
            'resetFaculty',
            'submitFaculty',
            'dropFaculty',
            'facultyForm',
            'add_faculty',
            'update_faculty'
        );
    });
});

fetchTableData('Schedules').then(() => {
    setupTable('Schedules', '#schedule-table-body').then(() => {
        setupSelectorOptions('scheduleSelect', 'Schedules', 'scheduleId');
        setupSelectorOptions('courseCode', 'Courses', 'code');
        setupSelectorOptions('facultyName', 'Faculties', 'name');
        handleSelectorChange(
            'scheduleSelect',
            [
                'scheduleId',
                'day',
                'startTime',
                'room',
                'section',
                'endTime',
                'facultyName',
                'courseCode',
            ],
            'scheduleId',
            'submitSchedule',
            'dropSchedule'
        );
        setFormAction(
            'scheduleSelect',
            'resetSchedule',
            'submitSchedule',
            'dropSchedule',
            'scheduleForm',
            'add_schedule',
            'update_schedule'
        );
    });
});
