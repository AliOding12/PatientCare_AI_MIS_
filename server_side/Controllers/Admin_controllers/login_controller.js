const db = require('../../Database/db');

// const loginDoc = async(req,res)=>{

//     const { email, password } = req.body;

//     // Query the database for the user
//     try {
//         // Query the database for a doctor with the given email
//         const query = 'SELECT * FROM doctors WHERE email = ?';
//         const [result] = await db.query(query, [email]); // Use parameterized queries to prevent SQL injection

//         // Check if the query returned any results
//         if (result.length === 0) {
//             return res.status(401).send({
//                 success: false,
//                 message: 'Invalid email or password.',
//             });
//         }

//         // Get the doctor from the result
//         const doctor = result[0];

//         // Compare the plaintext password
//         if (password === doctor.password) {
//             // Save session or perform additional actions
//             //req.session.doctorId = doctor.id; // Uncomment this if session handling is required
//             //res.redirect('/views/doctor.html');
//             //res.redirect('/doctor.html');

//              res.status(201).send({
//                 success: true,
//                 message: 'Login successful',
//             });
//         } else {
//             // Invalid password
//             return res.status(401).send({
//                 success: false,
//                 message: 'Invalid email or password.',
//             });
//         }
//     } catch (err) {
//         // Handle database or other server errors
//         console.error('Error querying database:', err.message);
//         return res.status(500).send({
//             success: false,
//             message: 'Internal Server Error',
//         });
//     }
    
// }


const loginDoc = async (req, res) => {
    const { email, password } = req.body;

    try {
        const query = 'SELECT * FROM doctors WHERE email = ?';
        const [result] = await db.query(query, [email]);

        if (result.length === 0) {
            return res.status(401).send({
                success: false,
                message: 'Invalid email or password.',
            });
        }

        const doctor = result[0];

        // Validate password
        if (password === doctor.password) {
            // Create a session
            req.session.doctorId = doctor.id;
            req.session.doctorName = doctor.name; // Optional: Store more info as needed

            return res.status(200).send({
                success: true,
                message: 'Login successful',
            });
        } else {
            return res.status(401).send({
                success: false,
                message: 'Invalid email or password.',
            });
        }
    } catch (err) {
        console.error('Error querying database:', err.message);
        return res.status(500).send({
            success: false,
            message: 'Internal Server Error',
        });
    }
};



//create a doctor login where if the provided email and password works we take the u_id and assign and use it as a req.session.id


const doclogin =(req,res)=>{

try {
    
} catch (error) {
    
}





}



    

module.exports = {loginDoc};



// Add admin login controller
// Add admin login controller
