import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import lsdRoutes from './routes/lsdRoutes.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/lsd', lsdRoutes);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from LSD App',
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () => console.log(`Server started on port ${port}` ));
  } catch (error) {
    console.log(error);
  }
};

startServer();
