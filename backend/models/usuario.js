const {Schema,model} = require('mongoose')

const ciclistaSchema = Schema({
    nombre:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password in required']
    },
    imagen:{
        type:String,
    },
    rol:{
        type:String,
        required:true,
        default:'USER'
    },
    estado:{
        type:String,
        default:true
    },
    googleSingIn:{
        type:Boolean,
        default:true
    }
})

module.exports = model('Cilista',ciclistaSchema)

