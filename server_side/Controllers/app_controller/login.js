const jwt = require("jsonwebtoken");
const db = require("../../Database/db");
const JWT_SECRET = "your_secret_key"; // Replace with a secure key or store in an environment variable

const login = async (req,res) => {

    const {email,password,usertype} = req.body;
    try {
        if(!['doctor','patient'].includes(usertype)){
            console.log('error 1');
           return res.status(400).send({
                success:false,
                message:'invalid user type'
            });
        }
    const tablename = usertype === 'doctor' ? 'doctors' : 'patients';
        // Fetch the user from the database
    const [user] = await db.query(`SELECT * FROM ${tablename} WHERE email=?`, [
        email,
      ]);
      if (user.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const userData = user[0];
  
      // Compare passwords (no encryption at this stage)
      if (userData.password !== password) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
  
      // Generate a JWT token
      const token = jwt.sign(
        {
          id: userData.id, // Replace with appropriate column for user ID
          email: userData.email,
          userType: usertype,
        },
        JWT_SECRET,
        { expiresIn: "1h" } // Token expires in 1 hour
      );
      console.log("this log is from new login: ", token);
  
      res.cookie("authToken", token, {
        httpOnly: false, // Prevent JavaScript access
        secure: true,
        maxAge: 60 * 60 * 1000, // 1 hour
        path: "/",
        sameSite: "None",
      });
  
      return res.status(200).json({
        message: "Login successful",
      });


    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Internal server error this is where it is from the login controlller",
            error: error.message,
          });
    }
}

module.exports = {login};// Add app login controller
// Add app login controller
