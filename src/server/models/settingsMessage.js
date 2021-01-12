import mongoose from 'mongoose'

const settingsSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    about: String
    // campus: [String],
});

const SettingsMessage = mongoose.model('SettingsMessage', settingsSchema);

export default SettingsMessage;