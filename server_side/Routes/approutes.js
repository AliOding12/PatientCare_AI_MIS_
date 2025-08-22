const app = require('express');
const Router = app.Router();
const {login} = require('../Controllers/app_controller/login');
const {UserRole} = require('../middleware/doctor_validate');
const {specialAuth} = require('../middleware/doctor_validate');
const {dashboard} = require('../Controllers/doctor_controllers/doc_dashboard');
const {appointment} = require('../Controllers/doctor_controllers/doc_dashboard');
const {appointment1} = require('../Controllers/app_controller/appointment');
const {report}= require('../Controllers/doctor_controllers/doc_dashboard');
const {NorthKorea}= require('../Controllers/app_controller/appointment');
const {upload} = require("../Controllers/app_controller/file");
const { getReports, uploadReport, deleteReport } = require("../Controllers/app_controller/file");
const {getDoctorInfo} = require('../Controllers/app_controller/docdashinfo');
const {getAllDoctors}= require('../Controllers/patient_controller/docallinfo');
const {getDoctorById} = require('../Controllers/patient_controller/docallinfo');
const {sidebar} = require('../Controllers/doctor_controllers/doc_dashboard');
const {mlinterface}=require('../Controllers/doctor_controllers/doc_dashboard');
const {patientdashboard} = require('../Controllers/doctor_controllers/doc_dashboard');
const {bookAppointment} = require('../Controllers/app_controller/appointment');


Router.post('/login',login);
Router.get('/docdashboard',specialAuth,UserRole(['doctor']),dashboard);
Router.get('/appointment',specialAuth,UserRole(['doctor']),appointment);
Router.get('/appointment1',specialAuth,UserRole(['doctor']),appointment1);
Router.get('/NorthKorea',specialAuth,UserRole(['doctor']),NorthKorea);//this is just a testing route
Router.get("/reports", specialAuth,UserRole(['doctor']), getReports);
Router.post("/reports/upload", specialAuth,upload.single('file'), uploadReport);
Router.delete("/reports/:reportId", specialAuth,UserRole(['doctor']), deleteReport);
Router.get('/medicalhistory',specialAuth,UserRole(['doctor']),report);
Router.get('/doctor-info',specialAuth,getDoctorInfo);
Router.get('/all-doctors',getAllDoctors);
Router.get('/doctor/:id',getDoctorById);
Router.get('/sidebar',sidebar);
Router.get('/mlinterface',specialAuth,UserRole(['doctor']),mlinterface);
Router.get('/patientdashboard',specialAuth,UserRole(['patient']),patientdashboard);
Router.post('/book-appointment',bookAppointment);

module.exports = Router;