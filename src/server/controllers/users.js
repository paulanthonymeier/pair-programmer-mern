import Users from '../models/Users.js';

export const getUsers = async (req, res) => {
    try {
       const user = await Users.find();
       res.status(200).json(user);
    } catch (error) {
       res.status(404).json({ message: error.message });
    }
}

export const createUsers = async (req, res) => {
    const user = req.body;
    const newUser = new Users(user);
    try {
       await newUser.save() 
       res.status(201).json(newUser);
    } catch (error) {
       res.status(409).json({ message: error.message });
    }
}