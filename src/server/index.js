import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// get routes for each page
import userRoutes from './routes/users.js'
import workspaceRoutes from './routes/workspaces.js'
import eventRoutes from './routes/events.js'
import profileRoutes from './routes/profile.js'
import settingsRoutes from './routes/settings.js'

const app = express();

// using the functions inside the routes folder 
app.use('/workspaces', workspaceRoutes);
app.use('/events', eventRoutes);
app.use('/students', userRoutes);
app.use('/profile', profileRoutes);
app.use('/settings', settingsRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// connecting to mongoose cloud atlas 
const CONNECTION_URL = 'mongodb+srv://mattk:2049goose@cluster0.yd6ia.mongodb.net/<dbname>?retryWrites=true&w=majority'
// setting the port to the one set in the environment variable, or :5000
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);