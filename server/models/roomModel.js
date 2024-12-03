const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    descr: {
        type: String,
        required: true
    },
    roomNumbers: {
        type: [{
            number: number, 
            unavailableDates: [Dates]
        }]
    }
})

mongoose.model.exports = mongoose.model("Room", roomSchema);