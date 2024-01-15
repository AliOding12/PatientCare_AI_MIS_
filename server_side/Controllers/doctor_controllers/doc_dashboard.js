const path = require('path');
const dashboard = (req, res) => {
    //res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
    //res.sendFile(path.join(__dirname, '../../views', 'dashboard.html')); // Adjust path based on the folder structure
    res.sendFile(path.resolve(__dirname, '../../views/docdash.html'));
    

   }; 

const appointment = (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../../views/appp2.html'));
}   

const report = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../views/reports.html'));
};
const sidebar = (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../../views/sidebar.html'));
}  
const mlinterface = (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../../views/mlinterface.html'));
}


const patientdashboard = (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../../views/patientviews/patientdashboard.html'));
}

   module.exports = {dashboard,appointment,report,sidebar,mlinterface,patientdashboard};// Add doctor dashboard controller
