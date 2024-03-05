const express = require("express");
const app = express();
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId; // Add this line to use ObjectId

// Create an instance of the express Router to define routes
const insertdata = express.Router();

insertdata.post("/insertdatafromclient", (req, res) => {
    mongoClient.connect("mongodb://localhost:27017/Diwali", (err, client) => {
        if (err) {
            console.error("Error connecting to MongoDB:", err);
            res.status(500).send({ message: "Internal Server Error" });
            return;
        }

        const db = client.db("Diwali");
        const collection = db.collection("DiwaliData");

        // Generate a unique ID using MongoDB ObjectId
        const participantId = new ObjectId();

        const participantData = {
            participantId: participantId, // Use the generated ObjectId
            participantName: req.body.participantName,
            gender: req.body.gender,
            city: req.body.city,
            mobile: req.body.mobile,
            emailId: req.body.emailId,
            areaPincode: req.body.areaPincode,
            registrationDate: new Date().toLocaleString()
        };

        collection.insertOne(participantData, (err, result) => {
            if (err) {
                console.error("Error inserting data:", err);
                res.status(500).send({ message: "Failed to insert document" });
            } else {
                console.log("Data Inserted Successfully");

                // Send the participantId back to the client
                res.send({ message: "Document Inserted", participantId: participantId.toHexString() });
            }

            // Close the database connection after insertion
            client.close();
        });
    });
});

module.exports = insertdata;