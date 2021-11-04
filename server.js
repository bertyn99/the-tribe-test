const express = require('express')
const app = express();
const PORT =3000
const db = require('./db/connexion')

//route
const articleRoute = require("./routes/articles"); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine','ejs')
app.use('/articles',articleRoute)

app.get('/',(req,res)=>{
    res.render('index',{articles:[]});
})
app.get('/articles',(req,res)=>{
    res.redirect('/')
})
app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}!`);
});