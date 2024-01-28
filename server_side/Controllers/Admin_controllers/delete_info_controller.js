const db = require('../../Database/db');

const deleteMedicalRecord = async (req, res) => {
    const { id } = req.params; // Medical record ID

    try {
        const query = `DELETE FROM MedicalHistory WHERE id = ?`;
        const [result] = await db.query(query, [id]);

        if (result.affectedRows === 0) {
            return res.status(404).send({ message: 'Medical record not found.' });
        }

        res.status(200).send({ message: 'Medical record deleted successfully!' });
    } catch (err) {
        console.error('Error deleting medical record:', err.message);
        res.status(500).send({ error: 'Failed to delete medical record.' });
    }
};

module.exports = {deleteMedicalRecord};



// Add admin delete info controller
