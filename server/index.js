import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from "helmet";
import morgan from 'morgan';
// routes
import reportsRoutes from './routes/reports.js';
import clientsRoutes from './routes/clients.js';
import requestsRoutes from './routes/requests.js';

// config
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}))

app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routers
app.use('/reports', reportsRoutes);
app.use('/clients', clientsRoutes);
app.use('/requests', requestsRoutes);

// mongo setup
const PORT = process.env.PORT || 9000;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(process.env.MONGO_URL, options).then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`))},
        err => { console.log(`Error ${err}, did not connect`)}
);
