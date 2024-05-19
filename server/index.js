import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';
import connectDB from './config/connectDB.js';
import router from './routes/index.js';

dotenv.config();
const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
const PORT = process.env.PORT || 8080;

app.get('/', (request, response) => {
  response.json({
    message: 'Server running on port' + PORT,
  });
});

//api end points
app.use('/api', router);
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
