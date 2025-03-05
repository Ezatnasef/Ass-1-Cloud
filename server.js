const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: 'config.env' });
const dbConnection = require('./config/database');
const categoryRoute = require('./routes/categoryRoute');

// Connect to database
dbConnection(); 


// Express app
const app = express();

// Express middleware
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    console.log(`mode: ${process.env.NODE_ENV}`);
}

// mount routes
app.use('/api/v1/categories', categoryRoute);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
}); 