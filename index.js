import express from 'express';
import './db/index.js';
import cors from 'cors';
import './models/index.js';
import userRoute from './routes/usersRoute.js';
import roleRoute from './routes/rolesRoute.js';
import reviewRouter from './routes/reviewsRoute.js';
import placeCategoriesRouter from './routes/placeCategoriesRoute.js';
import barrierReviewRouter from './routes/barriersReviewsRoute.js';
import barrierRouter from './routes/barriersRoute.js';
import FileRouter from './routes/fileUploadsRoute.js';
import ProfilePhotosRouter from './routes/profilePhotosRoute.js';
import { join, dirname } from "path";
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.static(join(__dirname, "uploads")));

app.use('/users', userRoute);
app.use('/roles', roleRoute);
app.use('/reviews', reviewRouter);
app.use('/placeCategories', placeCategoriesRouter);
app.use('/barriersReviews', barrierReviewRouter);
app.use('/barriers', barrierRouter);
app.use('/file-upload', FileRouter);
app.use('/profilePhotos', ProfilePhotosRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});