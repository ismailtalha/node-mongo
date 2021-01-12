const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let student = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number
        },
        location: {
            type: String
        }
    },
  
    { versionKey: false , timestamps: { createdAt: 'created_at' },collection: "student" } ,
    
);

module.exports = mongoose.model("students", student);