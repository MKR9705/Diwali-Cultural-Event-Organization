const express = require("express");
const app = express();
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const { ObjectId } = require('mongodb');

// Create an instance of the express Router to define routes
const deletedata = express.Router();

deletedata.delete('/deletedatafromclient/:participantId', (req, res) => {
    mongoClient.connect("mongodb://localhost:27017/Diwali", (err, client) => {
        if (err) {
            console.error("Error connecting to MongoDB:", err);
            res.status(500).send({ message: "Internal Server Error" });
        } else {
            const db = client.db("Diwali");
            
            // Use req.params.participantId to access the URL parameter
            const participantId = req.params.participantId;

            // Check if participantId is a valid ObjectID
            if (!ObjectId.isValid(participantId)) {
                console.error("Invalid participantId:", participantId);
                res.status(400).send({ message: "Invalid participantId" });
                client.close();
                return;
            }

            db.collection("DiwaliData").deleteOne({participantId: ObjectId(participantId) }, (err, result) => {
                if (err) {
                    console.error("Error deleting data:", err);
                    res.status(500).send({ message: "Failed to delete document" });
                } else {
                    if (result.deletedCount === 0) {
                        console.log("Document not found for deletion");
                        res.status(404).send({ message: "Document not found for deletion" });
                    } else {
                        console.log("Data Deleted Successfully");
                        res.send({ message: "Document Deleted" });
                    }
                }
                
                client.close();
            });
        }
    });
});

module.exports = deletedata;
