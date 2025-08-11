const express = require('express');
const cors = require('cors');
const app = express();

const apiRouter = require('./router'); // Вземи твоя router с маршрутите
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// Връзваш всички API маршрути към /api
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
