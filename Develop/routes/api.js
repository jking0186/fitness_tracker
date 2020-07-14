const router = require("express").Router();
const Workout = require("../models/workout")

router.get("/workouts", (_, res) => {
    Workout.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

router.post("/workouts", (_, res) => {
    Workout.create({ day: new Date()})
    .then((data) => res.json(data))
    .catch(err => res.json(err))
})

router.put("/workouts/:id", (req, res) => {
    console.log(req.params.id)
    Workout.findByIdAndUpdate(req.params.id, { $push: {exercise: req.body}}, {new: true, runValidators: true})
    .then(() => res.sendStatus(200))
    .catch(err => res.json(err))
})

router.get("/workouts/range", (req, res) => {
    Workout.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
    console.log(req.body)
})

module.exports = router