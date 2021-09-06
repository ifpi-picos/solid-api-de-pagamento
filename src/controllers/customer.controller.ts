import { Request, Response } from "express";
import { IcustomerRepository } from "../repositories/customer/Icustomer.repository";

export class CustomerController {
  constructor(private customerRepository: IcustomerRepository){}

  create(request: Request, response: Response){
    try {
      const customer = this.customerRepository.create(request.body)
      response.status(201).send(customer)
    }
    catch(error: any){
      const status = error.code || 500
      response.status(status).json({
        message: error.message,
        code: status
      })
    }
  }
}