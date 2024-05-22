const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        Date: { type: String, required: true },
        Title: { type: String, required: true },
        Context: { type: String, required: true },
    },
    { collection: "journal-data" }
    );

const Student = mongoose.model('journal', UserSchema);

module.exports = Student;