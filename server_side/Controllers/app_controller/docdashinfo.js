const db = require('../../Database/db'); // MySQL connection

exports.getDoctorInfo = async (req, res) => {
    const doctorId = req.user.id; // Assuming doctor ID is stored in JWT token

    try {
        const [rows] = await db.query(
            "SELECT id, name, specialization, bio FROM doctors WHERE id = ?",
            [doctorId]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: "Doctor not found" });
        }

        res.json(rows[0]); // Return doctor info
    } catch (error) {
        console.error("Error fetching doctor info:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// Add doctor dashboard info controller
// Add doctor dashboard info controller
