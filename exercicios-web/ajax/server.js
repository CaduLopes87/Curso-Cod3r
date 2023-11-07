import bodyParser from 'body-parser';
import express from 'express';
const app = express();

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3333, () => console.log('Executando'));