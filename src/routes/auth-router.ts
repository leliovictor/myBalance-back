import { Router } from 'express';

import { validateSchemaMiddleware } from "../middlewares/schema-middleware";

//import * as controller from "../controllers/auth-controller";
//import * as schema from "../schemas/auth-schema.js";

const authRouter = Router();

//authRouter.post("/signup", validateSchemaMiddleware(schema.auth), controller.postSignup);

export default authRouter;