const dbPromise = require('../Database/db');
const cookieParser = require('cookie-parser');
const cookieSignature = require('cookie-signature');
const validateSession = async (req, res, next) => {
    const sessionId = req.cookies['session_id']; // Extract the custom session ID
    console.log(sessionId);
    if (!sessionId) {
        return res.status(401).json({ error: 'Session not found or invalid' });
    }

    // Check if the session exists and is valid
    const [sessionResults] = await dbPromise.query(
        'SELECT * FROM sessions WHERE session_id = ? AND expires_at > NOW()',
        [sessionId]
    );

    if (sessionResults.length === 0) {
        return res.status(401).json({ error: 'Session not found or expired' });
    }

    // Attach session data to request for downstream use
    req.session = sessionResults[0];
    next();
};

module.exports = validateSession;
// if (!req.session.userId) {
//     return res.status(401).json({ error: 'Not authenticated' });
// }

// // Optional: Check if the session has expired
// const currentTime = new Date();
// const sessionExpirationTime = req.session.expiresAt; // You may store this in session after login

// if (sessionExpirationTime && currentTime > new Date(sessionExpirationTime)) {
//     return res.status(401).json({ error: 'Session expired' });
// }

// // Check if the session type matches the user (doctor or patient)
// // Example: if you want to restrict routes to doctors only
// if (req.session.isDoctor && req.originalUrl.includes('/patient-only-route')) {
//     return res.status(403).json({ error: 'Forbidden: Doctor cannot access this route' });
// }

// // Example: if you want to restrict routes to patients only
// if (!req.session.isDoctor && req.originalUrl.includes('/doctor-only-route')) {
//     return res.status(403).json({ error: 'Forbidden: Patient cannot access this route' });
// }



// const sessionId = req.cookies.session_id;

// if (!sessionId) {
    //     return res.redirect('/docapi/doclogin');
    // }
    
    // const [session] = await db.query('SELECT * FROM sessions WHERE session_id = ? AND end_time > NOW()', [sessionId]);
    
    // if (!session) {
//     return res.redirect('/docapi/doclogin');
// }

// req.user = session; // Attach session info for later use
// next();