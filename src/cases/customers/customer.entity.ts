import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { City } from '../cities/entities/city.entity';
import { Favorite } from '../favorites/entities/favorite.entity';
import { Review } from '../reviews/entities/review.entity';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ length: 250, nullable: true })
  address: string;

  @Column({ length: 8, nullable: true })
  zipcode: string;

  @ManyToOne(() => City, { eager: true, nullable: false })
  cityId: City;

  @OneToMany(() => Favorite, (favorite) => favorite.customer)
  favorite: Favorite[];

  @OneToMany(() => Review, (review) => review.customer)
  review: Review[];
}
