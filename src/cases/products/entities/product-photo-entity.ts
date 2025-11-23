import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity('product-photo')
export class ProductPhoto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => ProductPhoto, (photo) => photo.product)
  photos: ProductPhoto[];

  @ManyToOne(() => Product, (product) => product.photos)
  product: Product;
}
