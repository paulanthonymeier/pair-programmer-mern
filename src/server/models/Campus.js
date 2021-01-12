import mongoose from 'mongoose'

const campusSchema = mongoose.Schema({
    institute: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institute'
    },
    location: String
});

const Campus = mongoose.model('Campus', campusSchema);

export default Campus;