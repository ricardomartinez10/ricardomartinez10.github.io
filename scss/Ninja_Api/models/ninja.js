const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"

//create geolocation Schema


const GeoSchema=new Schema({
type:{
  type:String,
  default:"Point"
},
coordinates:{
  type:[Number],
  index:"2dsphere"
}
});

// create ninja Schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    url: {
        type: String
    }
    // add in geo location
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;


/*
// create ninja Schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    age:{
      type:Number
    },
    geometry: GeoSchema
    // add in geo location
});
*/
