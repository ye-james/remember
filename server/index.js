//imports
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

//import routes
const todoRoutes = require('./routes/Todos')

//config
const app = express();
dotenv.config();

//middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));


//Routes 
app.use('/home', todoRoutes);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})