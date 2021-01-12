import SettingsMessage from '../models/settingsMessage.js';

export const getSettings = async (req, res) => {
    try {
       const settingsMessages = await SettingsMessage.find();
       res.status(200).json(settingsMessages);
    } catch (error) {
       res.status(404).json({ message: error.message });
    }
}