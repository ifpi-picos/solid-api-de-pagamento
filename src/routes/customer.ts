import { Request, Response, Router } from "express"
import { CustomerController } from "../controllers/customer.controller"
import { AuthGuard } from "../guard/auth.guard"
import { StripeCustomerRepository } from "../repositories/customer/implementations/stripe.custumer.repository"
const router = Router()

const stripeInstancia = new StripeCustomerRepository()

const customerController = new CustomerController(stripeInstancia)

const authGuard = new AuthGuard()

router.post("/", authGuard.logged, customerController.create)

module.exports = router