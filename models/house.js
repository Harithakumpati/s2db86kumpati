const mongoose = require("mongoose")
const houseSchema = mongoose.Schema({
    house_name:{
        type: String,
        minLenght: 7
    },
    house_color:{
        type: String,
        minLenght: 5
    },
    house_cost:{
        type: Number,
        minLenght: 6
    }, 
})
module.exports = mongoose.model("House", houseSchema)