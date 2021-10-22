import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
import userRouter from './routes/user.js'


const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: 'true'}))
app.use(express.urlencoded({ limit: '30mb', extended: 'true'}))
app.use(cors())

app.use('/posts', postRoutes)
app.use('/user', userRouter)

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT|| 5000;

mongoose.connect('mongodb+srv://jjwebportal:jjwebportal123@cluster0.i3yt3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: `, PORT)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);