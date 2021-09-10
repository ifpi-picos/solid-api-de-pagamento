import { Request, Response } from "express";
import { IcustomerRepository } from "../repositories/customer/Icustomer.repository";
import { CustomerValidator } from "../validators/customer";

export class CustomerController {
  constructor(private customerRepository: IcustomerRepository, private customerValidator: CustomerValidator){}

  async create(request: Request, response: Response){
    try {
      const { body } = request
      if(this.customerValidator.create(body)) throw({code: 400, message: "dados invalidos"})
      const customer = await this.customerRepository.create(body)
      response.status(201).send({ message: "sucesso ao criar cliente", customerId: customer.id })
    }
    catch(error: any){
      const status = error.code || 500
      response.status(status).json({
        message: error.message,
        code: status
      })
    }
  }
  async get(request: Request, response: Response){
    try {
      const { params } = request
      const customer = await this.customerRepository.get(params.id)
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
  async update(request: Request, response: Response){
    try {
      const { body, params } = request
      await this.customerRepository.update(params.id, body)
      response.status(201).send({message: "cliente atualizado com sucesso"})
    }
    catch(error: any){
      const status = error.code || 500
      response.status(status).json({
        message: error.message,
        code: status
      })
    }
  }
  async delete(request: Request, response: Response){
    try {
      const { params } = request
      await this.customerRepository.delete(params.id)
      response.status(201).send({message: "cliente deletado com sucesso"})
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