import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import createRoomRouter from './routes/createRoomRouter.js';
import joinRoomRouter from './routes/joinRoomRouter.js';
import editRoomRouter from './routes/editRoomRouter.js';


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();
const viewsPath = path.join(__dirname, 'views');
const assetsPath = path.join(__dirname, 'public');


app.set("views", viewsPath);
app.set('view engine', 'ejs');

app.use(express.static(assetsPath));
app.use(express.urlencoded({extended: true}));

app.use("/create", createRoomRouter);
app.use("/join", joinRoomRouter);
app.use("/edit", editRoomRouter);

app.get('/', (req, res) => {
    res.render('index');
})


app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})