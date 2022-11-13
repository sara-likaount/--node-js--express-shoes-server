const express = require('express');
const app = express();
const cors= require('cors');
const port = 8080;

app.use(cors());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended:true}));


app.get('/', (req,res) => {
    res.send('success')
});

app.listen(port, (req,res) => {
    console.log(`server on in port ${port}`);
});
