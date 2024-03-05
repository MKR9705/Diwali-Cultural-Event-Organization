var express = require("express");
var app = express();
var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
let fetch = express.Router().get("/fetch", function(req, res) {
    mongoClient.connect("mongodb://localhost:27017/Diwali", (err, db) => {
        if (err)
            throw err;
        else {
            db.collection("DiwaliData").find().toArray((err, data) => {
                if (err)
                    throw err;
                else {
                    console.log("Data Received Successfully");
                    res.send(data);
                }
            });
        }
    });
});
module.exports = fetch;