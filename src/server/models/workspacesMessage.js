import mongoose from 'mongoose'

const workspaceSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    about: String
    // campus: [String],
});

const WorkspaceMessage = mongoose.model('WorkspacesMessage', workspaceSchema);

export default WorkspaceMessage;