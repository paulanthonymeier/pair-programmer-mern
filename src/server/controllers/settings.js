import Settings from '../models/Settings.js';

export const getSettings = async (req, res) => {
    try {
       const settings = await Settings.find();
       res.status(200).json(settings);
    } catch (error) {
       res.status(404).json({ message: error.message });
    }
}