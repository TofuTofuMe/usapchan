const express = require('express');
const config = require('../config.json');
const cookieParser = require('cookie-parser');

const collegeController = require('../controllers/collegeController');
const {verifyAdmin, verifyUser} = require('../controllers/userController');

var collegeRouter = express.Router();

collegeRouter.use(express.urlencoded({extended: true}));
collegeRouter.use(express.json());
collegeRouter.use(cookieParser());

collegeRouter.get('/', verifyUser, (req, res) => {
    res.status(200).end();
});

collegeRouter.get(
    '/get_downloadables',
    verifyUser,
    collegeController.getDownloadables
);

collegeRouter.get('/manage', verifyAdmin, (req, res) => {
    res.render('collegeView.ejs', {collegeName: config.collegeName});
});

collegeRouter.get('/get_courses', verifyAdmin, collegeController.getCourses);

collegeRouter.get(
    '/get_faculties',
    verifyAdmin,
    collegeController.getFaculties
);

collegeRouter.get(
    '/get_schedules',
    verifyAdmin,
    collegeController.getSchedules
);

collegeRouter.post('/add_course', verifyAdmin, collegeController.addCourse);

collegeRouter.post('/add_faculty', verifyAdmin, collegeController.addFaculty);

collegeRouter.post('/add_schedule', verifyAdmin, collegeController.addSchedule);

collegeRouter.post(
    '/update_course',
    verifyAdmin,
    collegeController.updateCourse
);

collegeRouter.post(
    '/update_faculty',
    verifyAdmin,
    collegeController.updateFaculty
);

collegeRouter.post(
    '/update_schedule',
    verifyAdmin,
    collegeController.updateSchedule
);

collegeRouter.post('/drop_course', verifyAdmin, collegeController.dropCourse);

collegeRouter.post('/drop_faculty', verifyAdmin, collegeController.dropFaculty);

collegeRouter.post(
    '/drop_schedule',
    verifyAdmin,
    collegeController.dropSchedule
);

module.exports = collegeRouter;
