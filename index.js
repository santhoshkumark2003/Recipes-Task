import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/dbConfig.js';
import recipesRouter from './Routers/recipesRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();


app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Recipes API');
});

app.use('/api/recipes',recipesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});