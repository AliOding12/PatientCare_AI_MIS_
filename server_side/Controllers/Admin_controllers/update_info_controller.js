const db = require('../../Database/db');

const updateDoctorInfo = async (req, res) => {
    const { id } = req.params; //doc id required here will get it later when we store the session of doctor from the params
    const { name, email, phone, specialization, profile_picture, bio } = req.body;

    try {
    
        let fields = [];
        let values = [];

        if (name) {
            fields.push('name = ?');
            values.push(name);
        }
        if (email) {
            fields.push('email = ?');
            values.push(email);
        }
        if (phone) {
            fields.push('phone = ?');
            values.push(phone);
        }
        if (specialization) {
            fields.push('specialization = ?');
            values.push(specialization);
        }
        if (profile_picture) {
            fields.push('profile_picture = ?');
            values.push(profile_picture);
        }
        if (bio) {
            fields.push('bio = ?');
            values.push(bio);
        }

        if (fields.length === 0) {
            return res.status(400).send({ error: 'No fields provided for update.' });
        }

        const query = `UPDATE Doctors SET ${fields.join(', ')} WHERE id = ?`;
        values.push(id);

        const [result] = await db.query(query, values);

        if (result.affectedRows === 0) {
            return res.status(404).send({ error: 'Doctor not found.' });
        }

        res.status(200).send({ message: 'Doctor information updated successfully!' });
    } catch (err) {
        console.error('Error updating doctor information:', err.message);
        res.status(500).send({ error: 'Failed to update doctor information.' });
    }
};


const updateTaskInfo = async (req, res) => {
    const { id } = req.params; // Get the task ID from the request URL this is because we donot need doc id since once doc is logged in it is obvious that the task getting update is only belonging to him
    const { task_name, task_description, due_date, status } = req.body;

    try {
        // query is build based on what ever task table column we want to change
        let fields = [];
        let values = [];

        if (task_name) {
            fields.push('task_name = ?');
            values.push(task_name);
        }
        if (task_description) {
            fields.push('task_description = ?');
            values.push(task_description);
        }
        if (due_date) {
            fields.push('due_date = ?');
            values.push(due_date);
        }
        if (status) {
            fields.push('status = ?');
            values.push(status);
        }

        if (fields.length === 0) {
            return res.status(400).send({ error: 'No fields provided for update.' });
        }

        const query = `UPDATE Tasks SET ${fields.join(', ')} WHERE id = ?`;
        values.push(id);

        const [result] = await db.query(query, values);

        if (result.affectedRows === 0) {
            return res.status(404).send({ error: 'Task not found.' });
        }

        res.status(200).send({ message: 'Task information updated successfully!' });
    } catch (err) {
        console.error('Error updating task information:', err.message);
        res.status(500).send({ error: 'Failed to update task information.' });
    }
};


const updateMedicalRecord = async (req, res) => {
    const { id } = req.params; // Medical record ID
    const { description, prescriptions, diagnosis } = req.body;

    try {
        const query = `
            UPDATE MedicalHistory
            SET description = COALESCE(?, description),
                prescriptions = COALESCE(?, prescriptions),
                diagnosis = COALESCE(?, diagnosis),
                updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `;
        const values = [description, prescriptions, diagnosis, id];

        const [result] = await db.query(query, values);

        if (result.affectedRows === 0) {
            return res.status(404).send({ message: 'Medical record not found or no changes made.' });
        }

        res.status(200).send({ message: 'Medical record updated successfully!' });
    } catch (err) {
        console.error('Error updating medical record:', err.message);
        res.status(500).send({ error: 'Failed to update medical record.' });
    }
};


module.exports = { updateDoctorInfo,updateTaskInfo,updateMedicalRecord };// Add admin update info controller
// Add admin update info controller
