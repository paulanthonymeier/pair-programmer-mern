import WorkspaceMessage from '../models/workspacesMessage.js';

export const getWorkspaces = async (req, res) => {
    try {
       const workspaceMessages = await WorkspaceMessage.find();
       res.status(200).json(workspaceMessages);
    } catch (error) {
       res.status(404).json({ message: error.message });
    }
}

export const createWorkspaces = async (req, res) => {
    const body = req.body;
    const newWorkspace = new WorkspaceMessage(post);
    try {
       await newWorkspace.save() 
       res.status(201).json(newWorkspace);
    } catch (error) {
       res.status(409).json({ message: error.message });
    }
}