import mongoose from 'mongoose'

const workspaceSchema = mongoose.Schema({
    workName: String,
    workType: String,
    description: String,
    outcomes: [String],
    campus: [String],
    size: Number
});

const Workspaces = mongoose.model('Workspaces', workspaceSchema);

export default Workspaces;