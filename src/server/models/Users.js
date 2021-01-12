import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    campus: [String],
    isTeacher: { type: Boolean, default: true },
    userProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile'
    },
    password: String
});

const Users = mongoose.model('Users', userSchema);

export default Users;