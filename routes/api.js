const router = require("express").Router();
const Workout = require("../models/workout");


router.post("/api/workouts", (_, res) => {
    Workout.create({})
    .then(data => {res.json(data)})
    .catch(err => {res.json(err)})
});