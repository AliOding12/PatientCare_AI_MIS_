const db = require('../../Database/db');


const createDoc = async (req,res)=>{

    const { name, email, password, phone, specialization, bio } = req.body;

    // Basic validation of the input fields
    if (!name || !email || !password || !phone || !specialization) {
        return res.status(400).send({
            success: false,
            message: 'All fields (name, email, password, phone, and specialization) are required.',
        });
    }

    try {
        // 1. Check if the doctor already exists
        const checkQuery = 'SELECT * FROM doctors WHERE email = ?';
        const [existingDoctor] = await db.query(checkQuery, [email]);

        if (existingDoctor.length > 0) {
            return res.status(409).send({
                success: false,
                message: 'Email is already registered.',
            });
        }

        // 2. Insert the new doctor into the database with additional fields
        const insertQuery = `
            INSERT INTO doctors (name, email, password, phone, specialization, bio) 
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        await db.query(insertQuery, [name, email, password, phone, specialization, bio]);

        // 3. Respond with success
        res.status(201).send({
            success: true,
            message: 'Registration successful.',
        });
    } catch (err) {
        // Handle database or other server errors
        console.error('Error registering doctor:', err.message);
        res.status(500).send({
            success: false,
            message: 'Internal Server Error',
        });
    }

}

module.exports = {createDoc};// Add admin registration controller
