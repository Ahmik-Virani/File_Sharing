import express from 'express';
import dotenv from 'dotenv';
import DBConnection from './Database/db.js'
import cors from 'cors'
import { getImage, uploadImage } from './controller/image_controller.js';
import upload from './utils/upload.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

DBConnection();

app.get("/", (req, res)=>{
    res.send("Welcome to my page");
});

app.post('/upload', upload.single('file'), uploadImage);
app.get('/file/:fileId', getImage);

app.listen(8000, ()=> {
    console.log("App is listening on port 8000");
});