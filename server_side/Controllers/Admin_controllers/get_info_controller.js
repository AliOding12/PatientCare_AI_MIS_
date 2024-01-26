const app = require('express');
const db = require('../../Database/db');


const GetDocInfo = async(req,res)=>{

    try {
        const data = await db.query('SELECT * FROM Doctors')
        res.status(200).send({
            success:true,
            message:data
        })
        
    } catch (error) {
        console.log(error);
        res.status(404).send({
            success:false,
            message:'Internal Server Error'
        })
    }



}

//i need another api for getting specific doctors data


const Get_Info_Tasks = async (req,res)=>{

    try {
         const [tasks] = await db.query(` SELECT 
                Tasks.id, 
                Tasks.task_name, 
                Tasks.task_description, 
                Tasks.due_date, 
                Tasks.status, 
                Doctors.name AS doctor_name
            FROM 
                Tasks 
            JOIN 
                Doctors ON Tasks.doctor_id = Doctors.id`)
                res.status(200).send({
                    success:true,
                    message:tasks
                })   


    } catch (error) {
        console.log(error);
        res.status(404).send({
            success:false,
            message:'Internal Server Error'
        })
    }
}

const Get_Appointments_info = async(req,res)=>{
    const {id} = req.params;
    try {
        const query = `
        SELECT a.id, a.doctor_id, d.name AS doctor_name, a.appointment_date, a.status
        FROM Appointments a
        JOIN Doctors d ON a.doctor_id = d.id
        WHERE a.patient_id = ?
        ORDER BY a.appointment_date DESC
    `;
    const [appointments] = await db.query(query, [id]);

    if (appointments.length === 0) {
        return res.status(404).send({success:false, message: 'No appointments found for this patient.' });
    }
    res.status(200).send({
        success:true,
        data:appointments
    })

    } catch (error) {
        res.status(404).send({
            success:false,
            message:'internal Server Error'
        })
    }
}


const getMedicalHistoryByPatient = async (req, res) => {
    const { id } = req.params; // Patient ID from the route parameter

    try {
        const query = `
            SELECT mh.id, mh.record_date, mh.description, mh.prescriptions, mh.diagnosis, d.name AS doctor_name
            FROM MedicalHistory mh
            JOIN Doctors d ON mh.doctor_id = d.id
            WHERE mh.patient_id = ?
            ORDER BY mh.record_date DESC
        `;
        const [records] = await db.query(query, [id]);

        if (records.length === 0) {
            return res.status(404).send({ message: 'No medical history found for this patient.' });
        }

        res.status(200).send({ records });
    } catch (err) {
        console.error('Error retrieving medical history:', err.message);
        res.status(500).send({ error: 'Failed to retrieve medical history.' });
    }
};


module.exports = {GetDocInfo,Get_Info_Tasks,Get_Appointments_info,getMedicalHistoryByPatient};// Add admin get info controller
