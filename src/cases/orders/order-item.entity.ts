import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../products/product.entity';

@Entity('order-item')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order)
  order: Order;

  @ManyToOne(() => Product, { eager: true, nullable: false })
  product: Product;

  @Column({ nullable: false })
  quantity: number;

  @Column('decimal', { nullable: true, precision: 10, scale: 2 })
  value: number;
}
