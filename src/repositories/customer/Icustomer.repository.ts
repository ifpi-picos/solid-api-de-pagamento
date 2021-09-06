import { CustomerDto } from "../../dtos/customer.dto";

export interface IcustomerRepository {
  create(customer: CustomerDto): {id: number};
  get(id: number): CustomerDto;
  update(id: number, customerChanges: CustomerDto): void;
  delete(id: number): void;
}