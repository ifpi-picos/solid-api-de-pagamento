import { Request, Response } from "express";
import { IMailProvider } from "../providers/IMailProvider";
import { IcustomerRepository } from "../repositories/customer/Icustomer.repository";

export class CustomerController {
  constructor(private customerRepository: IcustomerRepository){}

  async create(request: Request, response: Response){
    try {
      const customer = await this.customerRepository.create(request.body)
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