import mongoose from 'mongoose'

const profileSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
        },
    about: String
});

const UserProfile = mongoose.model('UserProfile', profileSchema);

export default UserProfile;