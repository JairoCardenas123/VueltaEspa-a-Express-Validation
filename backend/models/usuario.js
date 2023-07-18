import { Schema,model } from "mongoose"

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
        default:'USER'
    }
})

const ciclista = model('Cilista',ciclistaSchema)
export default ciclista
