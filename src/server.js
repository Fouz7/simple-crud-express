import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router/index.js';
import './database/mongodb.js';
import "./database/initmodels.js"

const app = express();
const port = 3003;


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api', router);


app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
