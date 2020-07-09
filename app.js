const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
//importing routes
const postRoutes = require('./routes/posts')
const app = express();
app.use(bodyParser.json());
//Middleware
app.use('/posts', postRoutes);


//Routes
app.get('/',(req,res) => {
	res.json("You are on home.")
})


//Connect to db
mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser: true,useUnifiedTopology: true},
() => {
	console.log('connected to db')
})

//Server
app.listen(3000,() => {
	console.log('Server is running on port 3000')
});