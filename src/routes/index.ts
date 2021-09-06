import { Router } from "express"
const router = Router()

router.use("/customer", require("./customer"))

export default router