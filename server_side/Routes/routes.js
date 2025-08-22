const app = require('express');
const Router = app.Router();
const {GetDocInfo} = require('../Controllers/Admin_controllers/get_info_controller');
const {Get_Info_Tasks} = require('../Controllers/Admin_controllers/get_info_controller');
const {Add_doctor_info} = require('../Controllers/Admin_controllers/post_info_controller');
const {addTask} = require('../Controllers/Admin_controllers/post_info_controller');
const {updateDoctorInfo} = require('../Controllers/Admin_controllers/update_info_controller');
const {updateTaskInfo} = require('../Controllers/Admin_controllers/update_info_controller');
const {Post_Appointments} = require('../Controllers/Admin_controllers/post_info_controller');
const {Get_Appointments_info} = require('../Controllers/Admin_controllers/get_info_controller');
const {createMedicalRecord} = require('../Controllers/Admin_controllers/post_info_controller');
const {getMedicalHistoryByPatient} = require('../Controllers/Admin_controllers/get_info_controller');
const {updateMedicalRecord} = require('../Controllers/Admin_controllers/update_info_controller');
const {deleteMedicalRecord} = require('../Controllers/Admin_controllers/delete_info_controller');
const {loginDoc} = require('../Controllers/Admin_controllers/login_controller');
const {createDoc} = require('../Controllers/Admin_controllers/registration_doc_controller');
//const {authenticateDoctor} = require('../middleware/protected_routes');

//Get Routes
Router.get('/docinfo',GetDocInfo);
Router.get('/gettask',Get_Info_Tasks);
Router.get('/getappointment/:id',Get_Appointments_info);
Router.get('/getmedicalhistory/:id',getMedicalHistoryByPatient);

//Post Routes
Router.post('/addDoc',Add_doctor_info);
Router.post('/addtask',addTask);
Router.post('/addAppointment',Post_Appointments);
Router.post('/addmedicalrecord',createMedicalRecord);

//Update Routes
Router.patch('/updatedoc/:id',updateDoctorInfo);
Router.patch('/updatetask/:id',updateTaskInfo);
Router.patch('/updatemedrecord/:id',updateMedicalRecord);

//Delete Routes
Router.delete('/deletemedrecord/:id',deleteMedicalRecord);

//login Routes 
Router.post('/loginDoc',loginDoc);

//create Users Routes
Router.post('/createDoc',createDoc);

module.exports = Router;

