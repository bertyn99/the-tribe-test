const express = require('express')
const app = express();
const PORT =3000
const articleRoute = require("./routes/articles"); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine','ejs')
app.use('/articles',articleRoute)

app.get('/',(req,res)=>{
    res.render('index',{articles:[]});
})
app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}!`);
});