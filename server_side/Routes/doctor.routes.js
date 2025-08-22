const app = require('express');
const Router = app.Router();
const validateSession = require('../middleware/protected_routes');
//const {doclogin} = require('../Controllers/doctor_controllers/doc_login');
const {login} = require('../Controllers/doctor_controllers/doc_login');
const {dashboard} = require('../Controllers/doctor_controllers/doc_dashboard');
const {loginpage} = require('../Controllers/doctor_controllers/doc_login');
const {docinfo} = require('../Controllers/doctor_controllers/doc_info');

//Router.get('/doctorlogin',doclogin);
Router.post('/login',login);
Router.get('/docdashboard',validateSession,dashboard);
Router.get('/doclogin',loginpage);
Router.get('/docinfo',docinfo);

module.exports = Router;