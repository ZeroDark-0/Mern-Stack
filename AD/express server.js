const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Hello Dosto, Welcome to Express server");
});
app.get("/about", (req, res) => {
    res.send("This is the about page");
});
app.get("/contact", (req, res) => {
    res.send("This is the contact page");
});
app.get("/student/:id", (req, res) => {
    res.send(`Welcome to Express server , Student ID: ${req.params.id}`);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
module.exports = app;