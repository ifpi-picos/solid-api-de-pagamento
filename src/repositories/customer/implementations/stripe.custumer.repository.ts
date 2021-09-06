import { CustomerDto } from "../../../dtos/customer.dto";
import { IcustomerRepository } from "../Icustomer.repository";

export class StripeCustomerRepository implements IcustomerRepository {
  private customers_mock: CustomerDto[] = [] 
  private id: number = 0;
  create(customer: CustomerDto){
    customer.id = this.id
    this.id++
    this.customers_mock.push(customer)
    return {id: customer.id}
  }
  get(id: number){
    const customerFinded = this.customers_mock.find(cust=> cust.id == id )
    return customerFinded
  }
  update(id: number, customerChanges: CustomerDto){
    const customerId = this.customers_mock.findIndex(cust=>cust.id == id)
    this.customers_mock.splice(customerId, 1)
    this.customers_mock[customerId] = customerChanges
  }
  delete(id: number){
    const customerId = this.customers_mock.findIndex(cust=>cust.id == id)
    this.customers_mock.splice(customerId, 1)
  }  
}