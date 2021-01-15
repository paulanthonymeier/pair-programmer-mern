import UserProfile from '../models/UserProfile.js';

export const getProfile = async (req, res) => {
    try {
       const userProfile = await UserProfile.find();
       res.status(200).json(userProfile);
    } catch (error) {
       res.status(404).json({ message: error.message });
    }
}