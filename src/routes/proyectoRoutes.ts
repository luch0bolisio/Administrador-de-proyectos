import { Router } from "express";
import {body,param} from "express-validator"
import { ProyectoController } from "../controllers/proyectoControllers";
import { validadorErrores } from "../middleware/validadorErrores";

const router = Router()

router.post('/',
   body("nombre").notEmpty().withMessage("El nombre no puede estar vacio"),
   body("cliente").notEmpty().withMessage("El cliente no puede estar vacio"),
   body("descripcion").notEmpty().withMessage("La descripción no puede estar vacia"),
   validadorErrores,
   ProyectoController.crearProyecto
)

router.get('/',ProyectoController.proyectos)

router.get('/:id',
    param("id").isMongoId().withMessage("ID no válido"),
    validadorErrores,
    ProyectoController.proyecto
)

router.put('/:id',
    body("nombre").notEmpty().withMessage("El nombre no puede estar vacio"),
    body("cliente").notEmpty().withMessage("El cliente no puede estar vacio"),
    body("descripcion").notEmpty().withMessage("La descripción no puede estar vacia"),
    validadorErrores,
    ProyectoController.editarProyecto
)

router.delete('/:id',
    param("id").isMongoId().withMessage("ID no válido"),
    validadorErrores,
    ProyectoController.eliminarProyecto
)

export default router