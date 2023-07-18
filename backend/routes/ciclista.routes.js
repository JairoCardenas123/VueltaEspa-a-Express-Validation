import Router from "express"
import {check} from "express-validator"
import {getCiclistas,deleteCilistas,putCiclistas,patchCiclistas,postCilistas} from "../controllers/ciclistas.controllers.js"
import validateDocument from "../middlewares/validate.documents.js"
import RoleSchema from "../models/Role.js"


const router = Router();


router.get("/",getCiclistas)
router.post("/",[
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
     validateDocument

],postCilistas);
router.delete("/",deleteCilistas)
router.put("/",putCiclistas)
router.patch("/",patchCiclistas)

export default router;

