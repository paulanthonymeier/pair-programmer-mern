import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    about: String
    // campus: [String],
});

const EventMessage = mongoose.model('EventMessage', eventSchema);

export default EventMessage;