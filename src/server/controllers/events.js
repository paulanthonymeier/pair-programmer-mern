import Events from '../models/Events.js';

export const getEvents = async (req, res) => {
    try {
       const event = await Events.find();
       res.status(200).json(event);
    } catch (error) {
       res.status(404).json({ message: error.message });
    }
}

export const createEvents = async (req, res) => {
    const event = req.body;
    const newEvent = new Events(event);
    try {
       await newEvent.save() 
       res.status(201).json(newEvent);
    } catch (error) {
       res.status(409).json({ message: error.message });
    }
}