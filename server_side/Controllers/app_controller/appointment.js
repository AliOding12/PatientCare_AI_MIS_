const db = require('../../Database/db');

// const appointment = async (req,res)=>{


// const doctorId = req.user.doctor_id; // Assuming you get this from JWT authentication

// const query = `
//     SELECT
//         CONCAT(p.first_name, ' ', p.last_name) AS patient_name,
//         DATE_FORMAT(a.appointment_date, '%Y-%m-%d') AS date,
//         DATE_FORMAT(a.appointment_date, '%H:%i') AS time,
//         a.status
//     FROM appointments a
//     JOIN patients p ON a.patient_id = p.patient_id
//     WHERE a.doctor_id = ?
//     ORDER BY a.appointment_date ASC;
// `;

// // Execute query safely using a parameterized query
// db.query(query, [doctorId], (err, results) => {
//     if (err) {
//         console.error("Error fetching appointments:", err);
//         return res.status(500).json({ error: "Database query failed" });
//     }
//     res.json(results);
// });

// }

const appointment1 = async (req, res) => {
    try {
        const doctorId = req.user.id; // Assuming you get this from JWT authentication
        //const doctorId = req.query.doctor_id || req.body.doctor_id || req.user?.doctor_id;
        if (!doctorId) {
            return res.status(400).json({ error: "Doctor ID is required" });
        }

        const query = `
                    SELECT
            a.id AS appointment_id,
            CONCAT(p.first_name, ' ', p.last_name) AS patient_name,
            d.name AS doctor_name,
            DATE_FORMAT(a.appointment_date, '%Y-%m-%d') AS date,
            DATE_FORMAT(a.appointment_date, '%H:%i') AS time,
            a.status
        FROM appointments a
        JOIN patients p ON a.patient_id = p.id
        JOIN doctors d ON a.doctor_id = d.id
        WHERE a.doctor_id = ?
        ORDER BY a.appointment_date ASC;


        `;

        const [results] = await db.query(query, [doctorId]); // Using MySQL2 async query

        if (results.length === 0) {
            return res.status(404).json({ message: "No appointments found" });
        }

        res.status(200).json(results);;

    } catch (error) {
        console.error("Unexpected Error:", error);
        res.status(500).json({ error: "Something went wrong, please try again later" });
    }
};
//Following is just a controller for testing no need to panikkkk!!
const NorthKorea = async(req,res)=>{
    const doctorId = req.user.id;
    console.log(doctorId);

};


const bookAppointment = async (req, res) => {

    const { patient_id, doctor_id, appointment_date, status } = req.body;

    if (!patient_id || !doctor_id || !appointment_date) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        await db.query(
            "INSERT INTO appointments (patient_id, doctor_id, appointment_date, status) VALUES (?, ?, ?, ?)",
            [patient_id, doctor_id, appointment_date, status]
        );

        res.json({ message: "Appointment booked successfully!" });
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Server error" });
    }
}


module.exports = {appointment1,NorthKorea,bookAppointment};
// SELECT
//     CONCAT(p.first_name, ' ', p.last_name) AS patient_name,
//     DATE_FORMAT(a.appointment_date, '%Y-%m-%d') AS date,
//     DATE_FORMAT(a.appointment_date, '%H:%i') AS time,
//     a.status
// FROM appointments a
// JOIN patients p ON a.id = p.id
// WHERE a.doctor_id = ?
// ORDER BY a.appointment_date ASC;
