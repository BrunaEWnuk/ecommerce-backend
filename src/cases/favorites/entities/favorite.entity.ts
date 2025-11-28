import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Customer } from '../../customers/customer.entity';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Customer, (customer) => customer.favorite, {
    onDelete: 'CASCADE',
  })
  customer: Customer;

  @ManyToOne(() => Product, (product) => product.favorite, {
    onDelete: 'CASCADE',
  })
  product: Product;
}
