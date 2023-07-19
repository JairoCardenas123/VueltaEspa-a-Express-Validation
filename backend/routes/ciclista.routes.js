const {Router} = require('express')
const {check} = require('express-validator')
const {getCiclistas,postCilistas,deleteCilistas,putCiclistas,patchCiclistas} = require('../controllers/ciclistas.controllers.js');
const { validateDocuments } = require('../middlewares/validate.documents.js')
  

const Role = require('../models/Role.js');    
const route = Router();


route.get("/",getCiclistas)
route.post("/",[
    check('nombre','nombre no es valido').not().isEmpty(),
    check('password','password debe de ser minimo 6 letras').isLength({min:6}),
    check('email','el correo no es valido').isEmail(),
/*     check('rol','no es un rol valido').isIn(['ADMIN','USER']),*/
    check('rol').custom(async(rol='')=>{
        const exitesRol = await Role.findOne({rol});
        if(!exitesRol){
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`)
        }
    }),
     validateDocuments
],postCilistas);
route.delete("/",deleteCilistas)
route.put("/",putCiclistas)
route.patch("/",patchCiclistas)

module.exports = route

