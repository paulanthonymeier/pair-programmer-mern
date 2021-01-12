import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    about: String
    // campus: [String],
});

const StudentMessage = mongoose.model('StudentMessage', studentSchema);

export default StudentMessage;