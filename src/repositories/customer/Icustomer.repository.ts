import { CustomerDto } from "../../dtos/customer.dto";

export interface IcustomerRepository {
  create(customer: CustomerDto): Promise<{id: string}>;
  get(id: string): Promise<CustomerDto>;
  update(id: string, customerChanges: CustomerDto): Promise<void>;
  delete(id: string): Promise<void>;
}