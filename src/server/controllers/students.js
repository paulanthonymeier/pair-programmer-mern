import StudentMessage from '../models/studentsMessage.js';

export const getStudents = async (req, res) => {
    try {
       const studentMessages = await StudentMessage.find();
       res.status(200).json(studentMessages);
    } catch (error) {
       res.status(404).json({ message: error.message });
    }
}

export const createStudents = async (req, res) => {
    const body = req.body;
    const newStudent = new StudentMessage(post);
    try {
       await newStudent.save() 
       res.status(201).json(newStudent);
    } catch (error) {
       res.status(409).json({ message: error.message });
    }
}