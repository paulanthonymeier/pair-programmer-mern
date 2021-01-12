import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: Number,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    institute: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institute'
    },
    userProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile'
    },
    isTeacher: { 
        type: Boolean, 
        default: true 
    },
});

const Users = mongoose.model('Users', userSchema);

export default Users;