// const express = require('express');
// const app = express();
// const port = 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true },
    (error, response) => {
        if (error) {
            console.error(">>> error occurs while establishing connection with mongodb server ");
            console.error(error);
        }
        // console.log(">>> Response: ", respons);
    });

// Creating Schema in mongodb for User
var userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phoneNumber: Number,
    nationality: String
});
// console.log(">>> User Schema: ", userSchema);

// Creating User Model in mongodb for Use
var User = mongoose.model('User', userSchema);
// console.log(">>> User Model: ", User);

// creating User reference with value
// var newUser = new User({
//     name: "Gurlivleen Singh Kainth",
//     age: 21,
//     email: "josh@ex.com",
//     phoneNumber: 9874563214,
//     nationality: "Indian"
// });

// Saving user to mongodb
// newUser.save((error, userResponse) => {
//     if(error) {
//         console.error(">>> error occurs while saving user to mongo db");
//         console.error(error);
//     }
//     console.log(">>> user saved successfully to mongodb: ", userResponse);
// });

// Updating existing user in mongodb
// User.findOneAndUpdate(
//     { "email": "josh@ex.com" },         // filter statement or where condition
//     { "nationality": "American" },      // field to be updated or updation statement
//     (error, response) => {              // asynchronous function run after when task got completed or callback function
//         if(error) {
//             console.error(">>> error occurs while updating user in mongodb");
//             console.error(error);
//         }
//         console.log(">>> user updated successfully");
//     }
// )

// Deleting particular user from mongodb
// User.findByIdAndDelete("6044b57e38c4592f02ba3cfe", (error, response) => {
//     if(error) {
//         console.error(">>> error occur while deleting particular user from mongodb");
//         console.error(error);
//     }
//     console.log(">>> user deleted successfully from mongodb");
//     console.log(response);
// })

// Retrieving all details of particular user from mongodb
// User.findById("6044b57e38c4592f02ba3cfe", (error, response) => {
//     if(error) {
//         console.error(">>> error occur while retrieving data from mongodb");
//         console.error(error);
//     }
//     console.log(">>> user retrieved successfully from mongodb");
//     console.log(response);
// });

// Retrieving only one field value of particular user from mongodb
// User.findById("6044b57e38c4592f02ba3cfe", "name" (error, response) => {
//     if(error) {
//         console.error(">>> error occur while retrieving data from mongodb");
//         console.error(error);
//     }
//     console.log(">>> user retrieved successfully from mongodb");
//     console.log(response);
// })

// Retreieving all data from mongodb
// User.find((error, response) => {
//     if(error) {
//         console.error(">>> error occurs while retrieving data from mongodb");
//         console.error(error);
//     }
//     console.log(response);
// })