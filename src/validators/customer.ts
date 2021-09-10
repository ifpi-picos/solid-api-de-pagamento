import { CustomerDto } from "../dtos/customer.dto";
import emailValidator from "email-validator"
export class CustomerValidator {
  create(customer: CustomerDto): boolean {
    const emailValid = emailValidator.validate(customer.email)
    if(!emailValid) return false
    if(!customer.name) return false
    return true
  }
}