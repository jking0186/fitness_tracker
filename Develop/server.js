const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))
app.use(morgan("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false });

app.use(require("./routes/apiroutes"));
app.use(require("./routes/htmlroutes"));

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})