import ciclistaSchema from "../models/usuario.js";
import bcryptjs from  "bcryptjs"

const getCiclistas = (req,res)=>{
    res.status(403).json({
        "message":"home page"
    })
}
const postCilistas = async(req,res)=>{
    const {nombre,email,password,rol}= req.body;
    const usuario = new ciclistaSchema({nombre,email,password,rol})

    //Verificar si el correo ya existe(duplicado)
    const existeEmail = await ciclistaSchema.findOne({email});
    if(existeEmail){
        return res.status(400).json({
            msg:"Email is already registered"
        })

    }

    //Encriptar nuestra contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt)

    await usuario.save()
    res.json({
        "message":"post api",
        usuario
    })
}

const deleteCilistas = (req,res)=>{
    res.json({
        "message":"post api"
       
    })
}

const putCiclistas = (req,res)=>{
    res.json({
        "message":"post api"
    })
}

const patchCiclistas = (req,res)=>{
    res.json({
        "message":"post api"
    })
}

export {getCiclistas,deleteCilistas,putCiclistas,patchCiclistas,postCilistas}
