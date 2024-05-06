import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve} from 'path'; // Add resolve here
import path  from 'path';
import multer from 'multer';
import bodyParser from 'body-parser';
import importFile from '../controllers/transactionController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appTransaction = express();
const csvParser = bodyParser.urlencoded({ extended: true });

appTransaction.use(csvParser);
appTransaction.use(express.static(resolve(__dirname, 'uploads')));

var cache = multer.diskStorage({
    destination: (req, file, method) => {
        method(null, './uploads'); 
    },
    filename: (req, file, method) => {
        method(null, file.originalname);
    }
});

var upload = multer({ storage: cache });

appTransaction.post('/uploadTransaction', upload.single('file'), (req, res, next) => {
    if (!req.file) {
        res.status(400).json({ message: "No file uploaded" });
    } else {
        next();
    }
}, importFile);

export default appTransaction;