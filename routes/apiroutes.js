const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (_, res) => {
    Workout.create()
    .then(data => {
        console.log(data);
        res.json(data)
    })
    .catch(err => {
        console.log(err);
        res.json(err)
    });
})

router.get("/api/workouts", (_, res) => {
    Workout.find()
    .then(data => {
        console.log(data);
        res.json(data)
    })
    .catch(err => {
        console.log(err);
        res.json(err)
    });
})

router.get("/api/workouts/range", (_, res) => {
    Workout.find({}).limit(7)
    .then(data => {
        console.log(data);
        res.json(data)
    })
    .catch(err => {
        console.log(err);
        res.json(err)
    });
})

router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true)
    })
    .catch(err => {
        console.log(err);
        res.json(err)
    });
})

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(params.id,
        {$push:{exercise:body}}
        )
    .then(data => {
        console.log(data);
        res.json(data)
    })
    .catch(err => {
        console.log(err);
        res.json(err)
    });
})

module.exports = router