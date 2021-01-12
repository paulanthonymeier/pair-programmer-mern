import mongoose from 'mongoose'

const instituteSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    campus: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campus'
    },
    userProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile'
    }
});

const Institute = mongoose.model('Institute', instituteSchema);

export default Institute;