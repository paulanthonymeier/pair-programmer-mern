import mongoose from 'mongoose'

const instituteSchema = mongoose.Schema({
    name: String,
});

const Institute = mongoose.model('Institute', instituteSchema);

export default Institute;