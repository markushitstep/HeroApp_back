const mongoose = require('mongoose')
const Schema = mongoose.Schema

const createSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    realName:{
        type: String,
        required: true
    },
    originDescription:{
        type: String,
        required: true
    },
    superPowers:{
        type: String,
        required: true
    },
    catchPhrase:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true,
        default: ''
    }
    // heroes:{
    //     ref: 'heroes',
    //     type: Schema.Types.ObjectId
    // }
})

module.exports = mongoose.model('create', createSchema)