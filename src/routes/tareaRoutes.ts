import { Router } from "express";
import {body,param} from "express-validator"
import { TareasController } from "../controllers/tareaControllers";
import { validadorErrores } from "../middleware/validadorErrores";

const router = Router()

router.post("/:id",
   param("id").isMongoId().withMessage("ID no válido"),
   body("nombre").notEmpty().withMessage("El nombre no puede estar vacio"),
   body("descripcion").notEmpty().withMessage("El cliente no puede estar vacio"),
   validadorErrores,
   TareasController.crearTarea
)

router.get("/",TareasController.tareas)

router.get("/:id",
    param("id").isMongoId().withMessage("ID no válido"),
    TareasController.tarea
)

router.put("/:id",
   param("id").isMongoId().withMessage("ID no válido"),
   validadorErrores,
   TareasController.editarTarea
)

router.delete("/:id",
   param("id").isMongoId().withMessage("ID no válido"),
   validadorErrores,
   TareasController.eliminarTarea
)

export default router