import express from 'express';
import connectDB from './lib/db.js';
import movieRouter from './routes/movies.routes.js'

const app = express();

// declaring port number 
const PORT = 3000;

// declaring data base connection function
connectDB();

// code for home page
app.get('/', (req,res) => {
    res.send('This is home page!!!!!');
});

// movie middileware
app.use('/movies', movieRouter);

//adding function for listening
app.listen(PORT, () => {
    console.log(`server started running on port http://localhost:${PORT}`);
});