const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))
app.use(morgan("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(require("./routes/api"));

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.get("/exercise", function(req,res) {
    res.sendFile(path.join(__dirname, "/public/exercise.html"));
})

app.get("/stats", function(req,res) {
    res.sendFile(path.join(__dirname, "/public/stats.html"));
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})