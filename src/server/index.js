import express from 'express';
import bodyParser from'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// import functions for the routes
import dashboardRoutes from './routes/dashboard.js'
import workspaceRoutes from './routes/workspaces.js'
import userRoutes from './routes/users.js'
import profileRoutes from './routes/userProfile.js'

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors({
    origin: "https://localhost:3000", // react app
    credentials: true
}))

app.post("/api/register", (req, res) => {
    Users.findOne([firstName, req.body.FirstName], async (err,doc) => {
        if (err) throw err;
        if (doc) res.send('User already exists');
        if (!doc) {
            // const hashedPassword = bcrypt.hash(req.body.password, 10)
            // const newUser = new Users([
            //     firstName = req.body.firstName,
            //     lastName = req.body.lastName,
            //     email = req.body.email,
            //     password = hashedPassword,
            //     institute = req.body.institute
            // ]);
            const user = req.body;
            const newUser = new Users(user);
            await newUser.save();
            res.send('User Signed Up')
        }
    })
})

// using the functions inside the routes folder 
// app.use('/api/login', loginRoutes)
app.use('/dashboard', dashboardRoutes);
app.use('/workspaces', workspaceRoutes);
app.use('/students', userRoutes);
app.use('/profile', profileRoutes);
app.use('/', (req, res) => res.send("Homepage"));

// connecting to mongoose cloud atlas 
const CONNECTION_URL = 'mongodb+srv://mattk:2049goose@cluster0.yd6ia.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 4444;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Connected to MongoDB and Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);