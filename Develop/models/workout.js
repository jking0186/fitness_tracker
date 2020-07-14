const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: true
            },
            duration: {
                type: Number,
                required: false
            },
            weight: {
                type: Number,
                required: false
            },
            reps: {
                type: Number,
                required: false
            },
            sets: {
                type: Number,
                required: false
            },
            distance: {
                type: Number,
                required: false
            }
        }
    ]
},
{
    toJSON:{virtuals: true}
});

workoutSchema.virtual("totalDuration").get( function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
})

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;