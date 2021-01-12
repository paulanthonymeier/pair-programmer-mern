import ProfileMessage from '../models/profileMessage.js';

export const getProfile = async (req, res) => {
    try {
       const profileMessages = await ProfileMessage.find();
       res.status(200).json(profileMessages);
    } catch (error) {
       res.status(404).json({ message: error.message });
    }
}