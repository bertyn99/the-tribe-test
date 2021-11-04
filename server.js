const express = require('express')
const app = express();
const PORT =3000
const db = require('./db/connexion');
const Article = require('./models/article');

//route
const articleRoute = require("./routes/articles"); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine','ejs')
app.use('/articles',articleRoute)

app.get('/',async (req,res)=>{
    let articles  = await Article.find().sort({ createdAt: 'desc' });
    res.render('index',{articles:articles});
})
app.get('/articles',(req,res)=>{
    res.redirect('/')
})
app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}!`);
});