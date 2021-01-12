import mongoose from 'mongoose'

const profileSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    about: String
    // campus: [String],
});

const ProfileMessage = mongoose.model('ProfileMessage', profileSchema);

export default ProfileMessage;