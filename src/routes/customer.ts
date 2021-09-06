import { Router } from "express"
import { CustomerController } from "../controllers/customer.controller"
import { StripeCustomerRepository } from "../repositories/customer/implementations/stripe.custumer.repository"
const router = Router()
const customerController = new CustomerController(new StripeCustomerRepository())

router.post("/", customerController.create)

module.exports = router