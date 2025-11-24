import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Brand } from '../../brands/brand.entity';
import { Category } from '../../categories/category.entity';
import { ProductPhoto } from './product-photo-entity';
import { Favorite } from 'src/cases/favorites/entities/favorite.entity';
import { Review } from 'src/cases/reviews/entities/review.entity';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('decimal', { nullable: false, precision: 10, scale: 2 })
  price: number;

  @Column('boolean', { nullable: false, default: true })
  active: boolean;

  @ManyToOne(() => Category, { eager: false, nullable: false })
  category: Category;

  @ManyToOne(() => Brand, { eager: false, nullable: true })
  brand: Brand;

  @OneToMany(() => ProductPhoto, (photo) => photo.product)
  photos: ProductPhoto[];

  @OneToMany(() => Favorite, (favorite) => favorite.product)
  favorite: Favorite[];

  @OneToMany(() => Review, (review) => review.product)
  review: Review[];
}
