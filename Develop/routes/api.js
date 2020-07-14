const router = require("express").Router();
const path = require("path");
const Workout = require("../models/workout");

router.get("/exercise", (_, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

router.get("/stats", (_, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

router.get("/api/workouts", (_, res) => {
    Workout.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

router.post("/api/workouts", (_, res) => {
    Workout.create({ day: new Date()})
    .then((data) => res.json(data))
    .catch(err => res.json(err))
})

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.params.id)
    Workout.findByIdAndUpdate(req.params.id, { $push: {exercise: req.body}}, {new: true, runValidators: true})
    .then(() => res.sendStatus(200))
    .catch(err => res.json(err))
})

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .sort({ day: -1 })
    .then(data => res.json(data))
    .catch(err => res.json(err))
    console.log(req.body)
})

module.exports = router