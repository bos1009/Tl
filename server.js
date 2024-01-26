const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://source.unsplash.com/random/64x64',
            'name': '홍길동',
            'birthday': '760225',
            'gender': '남자',
            'job': '직장인'
        },
        {
            'id': 2,
            'image': 'https://source.unsplash.com/random/64x64',
            'name': '김대중',
            'birthday': '660325',
            'gender': '남자',
            'job': '국회의원'
        },
        {
            'id': 3,
            'image': 'https://source.unsplash.com/random/64x64',
            'name': '이재명',
            'birthday': '680625',
            'gender': '남자',
            'job': '당대표'
        },
        {
            'id': 4,
            'image': 'https://source.unsplash.com/random/64x64',
            'name': '윤석열',
            'birthday': '701225',
            'gender': '남자',
            'job': '대통령'
        }
    ]);
})


app.listen(port, () => console.log(`Listening on port ${port}`))