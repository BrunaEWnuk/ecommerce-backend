import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Customer } from '../customers/customer.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private repository: Repository<Order>,
  ) {}

  findAll(customer?: Customer | null): Promise<Order[]> {
    if (customer) {
      return this.repository.find({
        where: { customer },
        relations: ['customer'],
      });
    }
    return this.repository.find({
      relations: ['customer'],
    });
  }

  findById(id: string): Promise<Order | null> {
    return this.repository.findOne({
      where: { id },
      relations: ['customer'],
    });
  }

  save(order: Order): Promise<Order> {
    return this.repository.save(order);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}
