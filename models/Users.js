const moongoose = require('mongoose');
const customerSchema = moongoose.Schema({
    c_fname:{
        type:String,
        require:true
    },
    c_lname:{
        type:String,
        require:true
    },
    c_phone:{
        type:String,
        require:true
    },
    c_address:{
        type:String
    },
    c_postalcode:{
        type:Number,
        require:true
    },
    c_gender:{
        type:String,
        require:true
    },
    c_status:{
        type:Boolean
    }
});
module.exports = moongoose.model('Customer',customerSchema);