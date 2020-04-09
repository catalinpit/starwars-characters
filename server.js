const express = require('express'),
      bodyParser = require('body-parser'),
      mysql = require('mysql'),
      db_config = require('./config/dbConfiguration'),
      characters = require("./controllers/characterControllers");

const app = express();
const PORT = 3000;

// Extract the body from an incoming request and display it as req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: db_config.HOST,
    user: db_config.USER,
    password: db_config.PASSWORD,
    database: db_config.DB
});

db.connect((err) => {
    if (err) throw err;

    console.log('Connected to the db!');
});

global.db = db;

// Routes
app.get("/", (req, res) => {
    res.json({ message: "Hello world!" });
});

app.post("/characters", characters.create);
  
app.get("/characters", characters.retrieveAll);

app.get("/characters/:characterId", characters.retrieveCharacter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});