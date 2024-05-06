import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import {PORT, MONGO_URL} from "./config.js";
import assert from 'assert';
import { parse } from 'csv-parse';
import appTransaction from './routes/uploadTransaction.js';

const app = express();
app.use(cors());

app.use('/',appTransaction);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
