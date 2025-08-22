const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./app-config');
const apiRouter = require('./router'); // Вземи твоя router с маршрутите

const app = express();
const PORT = process.env.PORT || 3000;

console.log('Current NODE_ENV:', process.env.NODE_ENV);
console.log('MongoDB URI from config:', config.dbURL);

const corsOptions = {
    origin: config.origin,
    credentials: true
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

mongoose.connect(config.dbURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(() => console.log('MongoDB connected'))
.catch((err => console.error('MongoDB connection error:',err)));

// Връзваш всички API маршрути към /api
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
