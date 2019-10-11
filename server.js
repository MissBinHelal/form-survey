const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended:true}))
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/result', (req, res) => {
    console.log(req.body);
    res.render('result',req.body);
});

app.listen(3000, () => console.log("listening on port 3000"))
