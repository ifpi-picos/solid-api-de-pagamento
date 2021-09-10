import { Router } from "express"
import { CustomerController } from "../controllers/customer.controller"
import { AuthGuard } from "../guard/auth.guard"
import { MockCustomerRepository } from "../repositories/customer/implementations/mock.customer.repository"
// import { StripeCustomerRepository } from "../repositories/customer/implementations/stripe.custumer.repository"
const router = Router()

const customerRepository = new MockCustomerRepository()

const customerController = new CustomerController(customerRepository)

const authGuard = new AuthGuard()

router.post("/", authGuard.logged, customerController.create)
router.get("/", authGuard.logged, customerController.create)
router.put("/", authGuard.logged, customerController.create)
router.delete("/", authGuard.logged, authGuard.admin, customerController.create)

module.exports = router