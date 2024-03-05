const express = require("express");
const app = express();
const mongodb = require("mongodb");
const { MongoClient, ObjectID } = mongodb;

// Create an instance of the express Router to define routes
const updateData = express.Router();

updateData.put("/updateParticipantData/:participantId", (req, res) => {
    const participantId = req.params.participantId;

    // Check if participantId is a valid ObjectID
    if (!ObjectID.isValid(participantId)) {
        return res.status(400).send({ message: "Invalid participantId format" });
    }

    MongoClient.connect("mongodb://localhost:27017/Diwali", (err, client) => {
        if (err) {
            console.error("Error connecting to MongoDB:", err);
            return res.status(500).send({ message: "Internal Server Error" });
        }

        const db = client.db("Diwali");

        // Construct the updated data object
        const updatedData = {};

        if (req.body.participantName) {
            updatedData.participantName = req.body.participantName;
        }

        if (req.body.mobile) {
            updatedData.mobile = req.body.mobile;
        }

        if (req.body.gender) {
            updatedData.gender = req.body.gender;
        }

        if (req.body.city) {
            updatedData.city = req.body.city;
        }

        if (req.body.emailId) {
            updatedData.emailId = req.body.emailId;
        }

        if (req.body.areaPincode) {
            updatedData.areaPincode = parseInt(req.body.areaPincode);
        }

        updatedData.updationDate = new Date().toLocaleString();

        // Use findOneAndUpdate for better atomicity
        db.collection("DiwaliData").findOneAndUpdate(
            { participantId: new ObjectID(participantId) },
            { $set: updatedData },
            { returnOriginal: false },
            (err, result) => {
                if (err) {
                    console.error("Error updating data:", err);
                    res.status(500).send({ message: "Failed to update document" });
                } else if (!result.value) {
                    // Document with the specified participantId not found
                    res.status(404).send({ message: "Participant not found" });
                } else {
                    console.log("Data Updated Successfully");
                    res.send({ message: "Document Updated", updatedData: result.value });
                }

                // Close the database connection after updating
                client.close();
            }
        );
    });
});

module.exports = updateData;
