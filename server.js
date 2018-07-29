const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//Create express instance
const app = express();
const port = process.env.PORT || 5000;


//Database Connection String Coming From config/keys
const db = require('./config/keys').mongoURI;


//Use Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Database Connection
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('Database Connected'))
        .catch(err => console.log(err));


//Route Setup
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

app.get('/', (req,res) => {
    res.send('Hello');
});


//Tell server to listen on ${port}
app.listen(port, () => {
   console.log( `Server started on port ${port}`);
});