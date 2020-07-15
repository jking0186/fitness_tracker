const router = require("express").Router();
const path = require("path");

router.get("/exercise", (_, res) => {
    res.sendFile(path.join(__dirname,"../public/exercise.html"))
})

router.get("/stats", (_, res) => {
    res.sendFile(path.join(__dirname,"../public/stats.html"))
})

module.exports = router;