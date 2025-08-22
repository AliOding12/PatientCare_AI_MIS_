const { error } = require('console');
const dbPromise = require('../../Database/db');
const cookieSignature = require('cookie-signature');
//const app = require('express');
const cookieParser = require('cookie-parser');
// const docinfo = async (req,res) => {
//     const sessionId = req.cookies.session_id;

//     const sessionQuery = 'SELECT user_id FROM sessions WHERE session_id = ? AND expires_at > NOW()';
//         await db.query(sessionQuery, [sessionId], (err, sessionResults) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: 'Internal server error' });
//         }

//         if (sessionResults.length === 0) {
//             return res.status(401).json({ error: 'Session expired or invalid' });
//         }

//         const userId = sessionResults[0].user_id;

//         const doctorQuery = 'SELECT name, email, specialization FROM doctors WHERE id = ?';
//          db.query(doctorQuery, [userId], (err, doctorResults) => {
//             if (err) {
//                 console.error(err);
//                 return res.status(500).json({ error: 'Internal server error' });
//             }

//             if (doctorResults.length === 0) {
//                 return res.status(404).json({ error: 'Doctor not found' });
//             }

//             res.status(200).send(doctorResults[0]);
//         });
//     });
// }

// const util = require('util');
// const dbQuery = util.promisify(db.query).bind(db);

// const docinfo = async (req, res) => {
    
//     const {id} = req.query;
//     try {
//         const [docresult] = await dbPromise.query(`SELECT * FROM doctors where id=?`,[id])
//         if (docresult.length === 0) {
//             return res.status(404).json({ error: 'Doctor not found' });
//         }
//         console.log(docresult);
//         res.json(docresult[0]);
    
//     }catch(error){
//         res.status(500).send({
//             success:false,
//             message:'internal server error'
//         })
//     }
// };
//app.use(cookieParser());

const docinfo = async (req, res) => {
    try {
        //cookieParser();
        const signedSessionId = req.cookies['connect.sid'];
        console.log('Signed Session ID from cookie:', signedSessionId);

        if (!signedSessionId) {
            return res.status(401).json({ error: 'Session ID not provided' });
        }

        // Unsign the session ID
        const sessionId = signedSessionId.startsWith('s:')
            ? cookieSignature.unsign(signedSessionId.slice(2), 'yourSecretKey') // Replace 'your-secret-key' with your express-session secret
            : signedSessionId;

        if (!sessionId) {
            return res.status(401).json({ error: 'Invalid session signature' });
        }

        console.log('Raw Session ID:', sessionId);

        
        const [sessionResults] = await dbPromise.query(
            'SELECT doctor_id FROM sessions WHERE session_id = ? AND expires_at > NOW()',
            [sessionId]
        );
        //console.log(sessionResults[0].doctor_id);
        if (sessionResults.length === 0 || !sessionResults[0].doctor_id) {
            return res.status(401).json({ error: 'Invalid or expired session' });
        }

        const doctorId = sessionResults[0].doctor_id;
        console.log(doctorId);
        // Fetch doctor data from the doctors table using doctor_id
        const [doctorData] = await dbPromise.query('SELECT * FROM doctors WHERE id = ?', [doctorId]);
        
        if (doctorData.length === 0) {
            return res.status(404).json({ error: 'Doctor data not found' });
        }
        
        // Return the doctor data as the response
        res.json(doctorData[0]);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send({
            success: false,
            message: 'Internal server error'
        });
    }
};


module.exports = {docinfo};
// try {
//     const sessionId = req.cookies.session_id;

//     // Ensure session ID is provided
//     if (!sessionId) {
//         console.error('Session ID is missing');
//         return res.status(400).send('Missing session ID');
//     }

//     // Query session table to validate session and get user_id
//     const sessionQuery = 'SELECT user_id FROM sessions WHERE session_id = ? AND end_time > NOW()';
//     const sessionResults = await dbQuery(sessionQuery, [sessionId]);

//     // Validate session results
//     if (sessionResults.length === 0) {
//         console.error('Invalid or expired session');
//         return res.status(401).send('Session expired or invalid');
//     }

//     const userId = sessionResults[0].user_id;

//     // Query doctor table to fetch doctor info
//     const doctorQuery = 'SELECT name, email, specialization FROM doctors WHERE id = ?';
//     const doctorResults = await dbQuery(doctorQuery, [userId]);

//     // Validate doctor results
//     if (doctorResults.length === 0) {
//         console.error(`Doctor not found for user_id: ${userId}`);
//         return res.status(404).send('Doctor not found');
//     }

//     // Send the doctor info as a JSON response
//     const doctorInfo = doctorResults[0];
//     res.status(200).json({
//         name: doctorInfo.name,
//         email: doctorInfo.email,
//         specialization: doctorInfo.specialization,
//     });
// } catch (err) {
//     console.error('Error fetching doctor info:', err);
//     res.status(500).send('Internal server error');
// }