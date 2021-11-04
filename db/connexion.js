//////////////////////////////////////////////////////////////////////////
//                            DATABASE CONNECTION                       //
//////////////////////////////////////////////////////////////////////////

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://test:test1234@cluster0.jr0oc.mongodb.net/tribeBlog?retryWrites=true&w=majority");

let connection = mongoose.connection;

connection.on("error", console.error.bind(console, 'Erreur lors de la connexion'));
connection.once('open', () => { console.log("Connexion à la base OK"); });

module.exports = connection