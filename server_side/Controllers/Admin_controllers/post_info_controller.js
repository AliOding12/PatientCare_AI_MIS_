const express = require('express');
const db = require('../../Database/db');

const Add_doctor_info = async (req,res)=>{
    const {name,email,phone,specialization,profile_picture,bio} = req.body;

    try {
        
        const query = `INSERT INTO doctors (name,email,phone,specialization,profile_picture,bio) VALUES(?,?,?,?,?,?)`;
        const [result ] = await db.query(query,[name,email,phone,specialization,profile_picture,bio]);
        res.status(201).send({
            success:true,
            message:'doctor added successfully'
        });
        

    } catch (error) {
        console.log(error);
        res.status(404).send({
            success:false,
            message:'Internal Server Error'
        })
    }

}

const addTask = async (req, res) => {
    const { doctor_id, task_name, task_description, due_date, status } = req.body;

    try {
        const query = `
            INSERT INTO tasks (doctor_id, task_name, task_description, due_date, status)
            VALUES (?, ?, ?, ?, ?)
        `;
        const [result] = await db.query(query, [
            doctor_id,
            task_name,
            task_description || null, // Optional field
            due_date,
            status || 'Pending', // Default status
        ]);

        res.status(201).send({
            message: 'Task added successfully!',
            taskId: result.insertId, // Return the ID of the new row
        });
    } catch (err) {
        console.error('Error adding task:', err.message);
        res.status(500).send({ error: 'Failed to add task.' });
    }
};

const Post_Appointments = async(req,res)=>{
    const {patient_id,doctor_id,appointment_date,status} = req.body;
    try {
            
     const query = `INSERT INTO appointments (patient_id,doctor_id,appointment_date,status) VALUES(?,?,?,?)`;
     const values = [patient_id,doctor_id,appointment_date,status];
     const result = await db.query(query,values);
     res.status(201).send({
        success:true,
        message:'Appointment booked successfully',
        data:result
     });  
        
    } catch (error) {
        res.status(404).send({
            success:false,
            message:'Internal Server Error'
        })

    }
}


const createMedicalRecord = async (req, res) => {
    const { patient_id, doctor_id, record_date, description, prescriptions, diagnosis } = req.body;

    try {
        const query = `
            INSERT INTO MedicalHistory (patient_id, doctor_id, record_date, description, prescriptions, diagnosis)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [patient_id, doctor_id, record_date, description, prescriptions, diagnosis];

        const [result] = await db.query(query, values);

        res.status(201).send({
            message: 'Medical record created successfully!',
            recordId: result.insertId
        });
    } catch (err) {
        console.error('Error creating medical record:', err.message);
        res.status(500).send({ error: 'Failed to create medical record.' });
    }
};




module.exports = {Add_doctor_info,addTask,Post_Appointments,createMedicalRecord};
