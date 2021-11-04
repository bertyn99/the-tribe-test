const express = require('express')
const app = express();
const PORT =3000
/* const apiRouter = require("./apiRouter").router; */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}!`);
});