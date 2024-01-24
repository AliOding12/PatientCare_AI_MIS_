const crypto = require('crypto');

function generateSessionId() {
    return crypto.randomBytes(32).toString('hex'); // Generates a 64-character hexadecimal string
}

module.exports = generateSessionId;// Add session generation controller
