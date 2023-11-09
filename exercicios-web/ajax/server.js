import bodyParser from 'body-parser';
import express from 'express';
const app = express();
// const multer = require('multer');
import multer from 'multer';

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload');
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
});

const upload = multer({ storage }).single('arquivo');

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.send('Erro no Upload...');
        }

        res.end('Upload concluído!')
    })
});

app.listen(3333, () => console.log('Executando'));