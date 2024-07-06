import mongoose from "mongoose";
const Schema = mongoose.Schema;


const brandschema = new Schema({
 name:String
});

const brandmodel = mongoose.model('brands', brandschema);

export default brandmodel