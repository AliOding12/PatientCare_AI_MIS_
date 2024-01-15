const db = require("../../Database/db"); // Your DB connection

// Get all doctors
exports.getAllDoctors = async (req, res) => {
    try {
        const query = "SELECT id, name, specialization, bio FROM doctors";
        const [results] = await db.query(query); // Using `promise()` for async/await

        res.json(results); // Send doctors as JSON
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Database error" });
    }
};
exports.getDoctorById = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const query = "SELECT id, name, specialization, bio FROM doctors WHERE id = ?";
        const [doctor] = await db.query(query, [doctorId]);

        if (doctor.length === 0) {
            return res.status(404).json({ error: "Doctor not found" });
        }

        res.json(doctor[0]); // Send doctor details as JSON
    } catch (error) {
        console.error("Error fetching doctor:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
// Add patient info controller
