import EventMessage from '../models/eventsMessage.js';

export const getEvents = async (req, res) => {
    try {
       const eventMessages = await EventMessage.find();
       res.status(200).json(eventMessages);
    } catch (error) {
       res.status(404).json({ message: error.message });
    }
}

export const createEvents = async (req, res) => {
    const body = req.body;
    const newEvent = new EventMessage(post);
    try {
       await newEvent.save() 
       res.status(201).json(newEvent);
    } catch (error) {
       res.status(409).json({ message: error.message });
    }
}