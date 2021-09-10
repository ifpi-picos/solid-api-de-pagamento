import { CustomerDto } from "../../../dtos/customer.dto";
import { IcustomerRepository } from "../Icustomer.repository";

export class MockCustomerRepository implements IcustomerRepository{
  private customers_mock: CustomerDto[] = [] 
  private id: number = 0;
  async create(customer: CustomerDto){
    customer.id = `${this.id}`
    this.id++
    this.customers_mock.push(customer)
    return {id: customer.id}
  }
  async get(id: string){
    const customerFinded = this.customers_mock.find(cust=> cust.id == id )
    return customerFinded
  }
  async update(id: string, customerChanges: CustomerDto){
    const customerId = this.customers_mock.findIndex(cust=>cust.id == id)
    this.customers_mock.splice(customerId, 1)
    this.customers_mock[customerId] = customerChanges
  }
  async delete(id: string){
    const customerId = this.customers_mock.findIndex(cust=>cust.id == id)
    this.customers_mock.splice(customerId, 1)
  }  
}