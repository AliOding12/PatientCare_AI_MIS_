const dbPromise = require("../../Database/db");
const path = require("path");
const generateSessionId = require('../doctor_controllers/generatesession');
const session = require("express-session");
// const doclogin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const query = "SELECT * FROM doctors WHERE email = ?";
//     const [result] = await db.execute(query, [email]);

//     if (result.length === 0 || result[0].password !== password) {
//       return res
//         .status(401)
//         .json({ success: false, message: "Invalid email or password" });
//     }

//     const doctor = result[0];
//     req.session.doctorId = doctor.id; // Set doctor ID in the session
//     res.status(200).json({ success: true, message: "Login successful" });
//   } catch (err) {
//     console.error("Error logging in:", err.message);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

const login = async (req, res) => {
  const { email, password, userType } = req.body;
  
  // Choose the table based on the user type (doctor or patient)
  const table = userType ? 'doctors' : 'patients';

  try {
      // Query the appropriate table to check for user credentials
      const [results] = await dbPromise.query(`SELECT * FROM ${table} WHERE email = ? AND password = ?`, [email, password]);

      if (results.length === 0) {
          return res.status(404).json({ error: 'User not found or invalid credentials' });
      }

      // Set session variables
      const user = results[0];
      req.session.userId = user.id;
      req.session.userType = userType;

      // Create a session record in the sessions table
      const sessionid =  generateSessionId();
      console.log(sessionid);
      res.cookie('session_id', sessionid, {
        httpOnly: true,
        secure: false, // only send cookies over HTTPS in production
        maxAge: 3600000, // 1 hour
        sameSite: 'None' // or 'Lax', or 'None' for cross-origin
    });

      const sessionData = {
          session_id: sessionid,
          doctor_id: userType ? user.id : null,
          patient_id: userType ? null : user.id,
          expires_at: new Date(Date.now() + 3600000), // Session expires in 1 hour
      };
      

      await dbPromise.query('INSERT INTO sessions SET ?', sessionData);
   
      res.json({ message: 'Login successful' });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Database error' });
  }
}
  
  const loginpage = async (req,res) => {
    res.sendFile(path.resolve(__dirname, '../../views/login_doctor.html'));
    
  }
  
  module.exports = {  login,loginpage };
  
//   try {
//     const { email, password, userType } = req.body; // userType: 'doctor' or 'patient'

//     // Validate credentials based on userType
//     const userTable = userType === "doctor" ? "doctors" : "patients";
//     const [user] = await db.query(
//       `SELECT * FROM ${userTable} WHERE email = ? AND password = ?`,
//       [email, password]
//     );

//     if (!user) {
//       return res.status(401).send("Invalid credentials");
//     }
    
//     const userId = user[0].id;

//     // Create a session
//     const sessionId = generateSessionId(); // Implement a secure session ID generator
//     const end_time = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24-hour session

//     await db.query(
//       "INSERT INTO sessions (session_id, user_id, user_type, end_time) VALUES (?, ?, ?, ?)",
//       [sessionId, userId, userType, end_time]
//     );

//     // Set session cookie
//     res.cookie("session_id", sessionId, { httpOnly: true });
//     res.status(201).json({message:"Login successful"});
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };



// Add doctor login controller
