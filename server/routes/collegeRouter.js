const express = require('express');
const config = require('../config.json');
const bodyParser = require('body-parser');

const collegeController = require('../controllers/collegeController');

var collegeRouter = express.Router();

collegeRouter.use(bodyParser.urlencoded({extended: false}));

collegeRouter.get('/', (req, res) => {
    res.status(200).end();
});

collegeRouter.get('/manage', (req, res) => {
    res.render('collegeView.ejs', {collegeName: config.collegeName});
});

collegeRouter.get('/list_courses', collegeController.getCourses);

collegeRouter.get('/list_faculties', collegeController.getFaculties);

collegeRouter.get('/list_schedules', collegeController.getSchedules);

collegeRouter.post('/add_course', collegeController.addCourse);

collegeRouter.post('/add_faculty', collegeController.addFaculty);

collegeRouter.post('/add_schedule', collegeController.addSchedule);

collegeRouter.post('/update_course', collegeController.updateCourse);

collegeRouter.post('/update_faculty', collegeController.updateFaculty);

collegeRouter.post('/update_schedule', collegeController.updateSchedule);

collegeRouter.post('/drop_course', collegeController.dropCourse);

collegeRouter.post('/drop_faculty', collegeController.dropFaculty);

collegeRouter.post('/drop_schedule', collegeController.dropSchedule);

module.exports = collegeRouter;
