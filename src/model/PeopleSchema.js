import mongoose from "mongoose";

const Schema = mongoose.Schema;

let PeopleSchema = new Schema({
    index: {type: Number, required: true},
    name: {type: String, required: true, max:100}
})

export default PeopleSchema