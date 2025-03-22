// src/server.ts
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db';
import { setupSwagger } from './config/swagger';
import userRoutes from './routes/user.routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
connectDB();

app.use('/api/users', userRoutes);

// 🔥 Swagger setup
setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
