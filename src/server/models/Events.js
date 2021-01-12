import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
    eventName: String,
    eventType: String,
    description: String,
    outcomes: [Number]
});

const Events = mongoose.model('Events', eventSchema);

export default Events;