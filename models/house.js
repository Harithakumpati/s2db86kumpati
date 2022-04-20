const mongoose = require("mongoose")
const houseSchema = mongoose.Schema({
    house_name: String,
    house_color: String,
    house_cost: Number
})
module.exports = mongoose.model("House", houseSchema)