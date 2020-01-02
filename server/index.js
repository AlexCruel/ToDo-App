const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('./routes/api/posts');
const mongoose = require('mongoose');
const Users = require('./routes/api/Users');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api/posts', posts);
app.use('/users', Users);

// Handle production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

/* Register Form */
const mongoURI = 'mongodb+srv://Test:12345@cluster0-gaifl.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));