import { Router } from "express";
import Users from "./users";
import Messages from "./messages";
import userRequireMiddleware from "../middleware/userRequire";


const router = Router();

router.use(userRequireMiddleware);

router.use("/users", Users);
router.use("/messages", Messages);

export default router;
