const express = require("express");
const { where } = require("../models/student");
const student = require("../models/student");
const app = express();


const router = express.Router();

//Get All Students
//Route localhost:2000/student
router.get('/', (function (req, res) {
    student.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
}))

//Add Student 
//Route localhost:2000/student/
router.post('/', (req, res) => {

    console.log(req.body)
    const data = student.create(req.body, (err, data) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        res.send(data)
    })


})

//Get Student By Id
//Route localhost:2000/student/id
router.get('/:id', (function (req, res) {
    var ObjectId = require('mongodb').ObjectID;
    student.find({ _id: new ObjectId(req.params.id) }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
}))

//Update Student By Id
//Route localhost:2000/student/id
router.put('/:id', (function (req, res) {
    var ObjectId = require('mongodb').ObjectID;
    var updateddata = req.body;
    var result = student.updateOne({ '_id': new ObjectId(req.params.id) }, updateddata
        , {
            new: true
        }, (result, err) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
}))

//Delete Student By Id
//Route localhost:2000/student/id
router.delete('/:id', (function (req, res) {
    var ObjectId = require('mongodb').ObjectID;
    var id = new ObjectId(req.params.id);
    var result = student.findByIdAndDelete(id, null, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Deleted");
        }
    });
}))

// Delete All Students
//Route localhost:2000/student/
router.delete('/', (function (req, res) {
    var ObjectId = require('mongodb').ObjectID;
    var id = new ObjectId(req.params.id);
    var result = student.deleteMany((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Deleted All");
        }
    });
}))

module.exports = router;