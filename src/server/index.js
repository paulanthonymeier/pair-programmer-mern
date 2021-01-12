import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// import functions for the routes
import userRoutes from './routes/users.js'
import workspaceRoutes from './routes/workspaces.js'
import profileRoutes from './routes/userProfile.js'
import dashboardRoutes from './routes/dashboard.js'

const app = express();

// using the functions inside the routes folder 
app.use('/dashboard', dashboardRoutes);
app.use('/workspaces', workspaceRoutes);
app.use('/students', userRoutes);
app.use('/profile', profileRoutes);

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