import { StripeConfig } from "../../../config";
import { CustomerDto } from "../../../dtos/customer.dto";
import { IcustomerRepository } from "../Icustomer.repository";

export class StripeCustomerRepository extends StripeConfig implements IcustomerRepository {
  public async create(customerData: CustomerDto){
    const customers = await this.stripe.customers.list({
      email: customerData.email
    });
    if(customers.data.length){
      throw("email ja cadastrado")
    }
    const customer = await this.stripe.customers.create({
        email: customerData.email,
        name: customerData.name,
    });
    return { id: customer.id };
  }
  async get(id: string){
    const customerFinded = await this.stripe.customers.retrieve(id)
    return customerFinded as CustomerDto
  }
  async update(id: string, customerChanges: CustomerDto){
    const customerId = await this.stripe.customers.update(id, customerChanges)
  }
  async delete(id: string){
    const customerId = await this.stripe.customers.del(id)
  }  
}