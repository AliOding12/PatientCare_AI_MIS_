const db = require("../../Database/db"); // Assuming you have a database connection setup
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// 🔹 Storage Configuration for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "F:/Practice projects/uploads"); // Folder to store uploaded files
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage: storage });

// 🔹 1️⃣ Get Reports for a Doctor (Protected Route)
const getReports = async (req, res) => {
    try {
        const doctorId = req.user.id; // Assuming this is set via JWT authentication

        const query = `
             SELECT id, title, file_path, upload_date
            FROM reports
            WHERE doctor_id = ?
            ORDER BY upload_date DESC;
        `;

        const [results] = await db.query(query, [doctorId]);

        if (results.length === 0) {
            return res.status(404).json({ message: "No reports found" });
        }

        res.status(200).json(results);
    } catch (err) {
        console.error("Error fetching reports:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// 🔹 2️⃣ Upload Report (POST)
// const uploadReport = async (req, res) => {
//     try {
//         console.log("Uploaded File:", req.file); // Debugging log
//         upload.single("file")(req, res, async (err) => {
//             if (err) {
//                 return res.status(400).json({ error: "File upload failed" });
//             }
//             //const {patient_id} = 2;
//             const { title } = req.body;
//             const doctorId = req.user.id;
//            // const filePath = path.join("../../uploads/", req.file.filename);
//            const filePath = req.file.path; 
//            if (!title || !filePath) {
//                 return res.status(400).json({ error: "Missing required fields" });
//             }

//             const query = `
//                 INSERT INTO reports (title, file_path, doctor_id)
//                 VALUES (?, ?, ?);
//             `;

//             await db.query(query, [title, filePath, doctorId]);

//             res.status(201).json({ message: "Report uploaded successfully" });
//         });
//     } catch (err) {
//         console.error("Error uploading report this is the error:", err);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };
const uploadReport = async (req, res) => {
    try {
        console.log("Received Request:", req.body);  // Debugging log
        console.log("Uploaded File:", req.file); // Debugging log

        // Check if file is uploaded
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        // Get data from request body
        const { title } = req.body;
        const id = req.user.id;
        // ✅ Check if req.body is missing data
        if (!title ||  !id) {
            console.log("Missing data:", { title, id });
            return res.status(400).json({ error: "Missing required fields" });
        }

        const filePath = path.join("F:/Practice projects/uploads", req.file.filename);

        // ✅ Log Query Before Execution
        console.log("Executing Query...");

        // Insert into database
        const query = `
            INSERT INTO reports (title, file_path,  doctor_id) 
            VALUES (?, ?, ?)
        `;

        db.query(query, [title, filePath, id], (err, result) => {
            if (err) {
                console.error("Database Insert Error:", err);
                return res.status(500).json({ error: "Database error" });
            }

            console.log("Insert Successful:", result);
            res.status(201).json({ message: "Report uploaded successfully", reportId: result.insertId });
        });
    } catch (error) {
        console.error("Upload Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// 🔹 3️⃣ Delete Report (DELETE)
const deleteReport = async (req, res) => {
    try {
        const { reportId } = req.params;
        const doctorId = req.user.id;

        // Fetch the file path before deleting
        const fileQuery = `SELECT file_path FROM reports WHERE id = ? AND doctor_id = ?;`;
        const [fileResult] = await db.query(fileQuery, [reportId, doctorId]);

        if (fileResult.length === 0) {
            return res.status(404).json({ error: "Report not found or unauthorized" });
        }

        const filePath = fileResult[0].file_path;

        // Delete the file from the server
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error("Error deleting file:", err);
            }
        });

        // Delete the record from the database
        const deleteQuery = `DELETE FROM reports WHERE id = ? AND doctor_id = ?;`;
        await db.query(deleteQuery, [reportId, doctorId]);

        res.status(200).json({ message: "Report deleted successfully" });
    } catch (err) {
        console.error("Error deleting report:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getReports, uploadReport, deleteReport,upload };
