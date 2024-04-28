const {Course, Faculty, Schedule} = require('../utils/sqlHandler');
const fs = require('fs/promises');

exports.getDownloadables = async (req, res) => {
    try {
        const downloadables = await fs.readdir('assets/downloadables/', {
            withFileTypes: true,
            recursive: true,
        });
        res.status(200).send(downloadables);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get downloadables.',
            error: error.message,
        });
    }
};

exports.addCourse = async (req, res) => {
    try {
        const {code, title} = req.body;
        await Course.create({
            code,
            title,
        });
        res.status(201).redirect('/college/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to add course.',
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
            message: 'Failed to add faculty.',
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
            message: 'Failed to add schedule.',
            error: error.message,
        });
    }
};

exports.updateCourse = async (req, res) => {
    try {
        const {courseId, code, title} = req.body;

        await Course.update(
            {id: courseId, code: code, title: title},
            {
                where: {
                    id: courseId,
                },
            }
        );
        res.status(200).redirect('/college/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating course.',
            error: error.message,
        });
    }
};

exports.updateFaculty = async (req, res) => {
    try {
        const {facultyId, rank, name, nickname, schedule} = req.body;

        await Faculty.update(
            {rank: rank, name: name, nickname: nickname, schedule: schedule},
            {where: {id: facultyId}}
        );
        res.status(200).redirect('/college/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating faculty.',
            error: error.message,
        });
    }
};

exports.updateSchedule = async (req, res) => {
    try {
        const {scheduleId, day, room, section, startTime, endTime} = req.body;

        await Schedule.update(
            {
                id: scheduleId,
                day: day,
                room: room,
                section: section,
                startTime: startTime,
                endTime: endTime,
            },
            {where: {id: scheduleId}}
        );
        res.status(200).redirect('/college/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating schedule.',
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
            message: 'Error fetching courses.',
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
            message: 'Error fetching faculties.',
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
            message: 'Error fetching schedules.',
            error: error.message,
        });
    }
};

exports.dropCourse = async (req, res) => {
    try {
        const {courseId, code, title} = req.body;

        const course = await Course.findOne({
            where: {
                id: courseId,
                code: code,
                title: title,
            },
        });

        if (!course) {
            return res.status(400).json({
                success: false,
                message: 'Course not found.',
            });
        }
        await course.destroy();
        res.status(200).redirect('/college/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to destroy course.',
            error: error.message,
        });
    }
};

exports.dropFaculty = async (req, res) => {
    try {
        const {facultyId, rank, name} = req.body;

        const faculty = await Faculty.findOne({
            where: {
                id: facultyId,
                rank: rank,
                name: name,
            },
        });

        if (!faculty) {
            return res.status(400).json({
                success: false,
                message: 'Faculty not found.',
            });
        }
        await faculty.destroy();
        res.status(200).redirect('/college/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to destroy faculty.',
            error: error.message,
        });
    }
};

exports.dropSchedule = async (req, res) => {
    try {
        const {scheduleId, day, room, section, startTime, endTime} = req.body;

        const schedule = await Schedule.findOne({
            where: {
                id: scheduleId,
                day: day,
                startTime: startTime,
                endTime: endTime,
                room: room,
                section: section,
            },
        });

        if (!schedule) {
            return res(400).json({
                success: false,
                message: 'Schedule not found.',
            });
        }
        await schedule.destroy();
        res.status(200).redirect('/college/manage.');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to destroy schedule.',
            error: error.message,
        });
    }
};
