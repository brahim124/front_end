const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const Userschema = new Schema ({

    userName:{type: String, required: true, unique: true },
    userPassword:{type: String, required: true},
})
module.exports = mongoose.model('User',Userschema);