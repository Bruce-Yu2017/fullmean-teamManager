var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var session = require('express-session');
app.use(session({secret: 'codingdojorocks'}));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
var path = require('path');
app.set('views', path.join(__dirname, './views'));
// mongoose.Promise = global.Promise;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/teammanager');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(path.join(__dirname, "/public/dist")));

var Schema = mongoose.Schema;
var PlaySchema = new mongoose.Schema({
    name: String,
    position: String
}, {timestamps: true})
mongoose.model("Player", PlaySchema);
var Player = mongoose.model("Player");

app.post("/player", function(req, res) {
    var player = new Player({name: req.body.name, position: req.body.position});
    player.save(function(err) {
        if(err) {
            console.log(err);
        }
        else {
            res.redirect("/player")
        }
    })
})

app.get("/player", function(req, res) {
    Player.find({}).exec(function(err, players) {
        if(err) {
            console.log(err);
        }
        else {
            res.json(players)
        }
    })
})

app.delete("/player/destroy/:id", function(req, res) {
    Player.remove({_id: req.params.id}, function(err) {
        if(err) {
            console.log("delete error");
        }
        else {
            console.log("success delete");
            res.redirect("/player");
        }
    })
})

app.listen(8000, function() {
    console.log("listening to port 8000.")
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"));
});