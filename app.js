const express = require('express');

const app = express();

//view engine config

app.set('view engine', 'ejs');
app.set('views','./views') 
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log("Tenha fé que vai funcionar")
})