
import { Router } from "express";
import { userController } from "../controllers/userController.js";
import { userControllerSlash } from "../controllers/userControllerSlash.js";

const router = Router();

router.get('/user', userController);
router.get('/create', userControllerSlash);

export default router;