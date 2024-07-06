import express from 'express';
import bodyParser from 'body-parser';
import brandroute from './routes/admin/brandroute.js';
import connect from './database/db.js';

connect().then(()=>console.log("connected db"))

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/brand' , brandroute)

app.listen(process.env.PORT)