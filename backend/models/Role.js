import {Schema,model} from "mongoose"

const RoleSchema = Schema({
    rol:{
        type:String,
        required:[true,'el rol es OBLIGATORIO']
    }
})

const roles = model('Role',RoleSchema)
export default roles;