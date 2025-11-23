import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Category } from '../../categories/category.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private repository: Repository<Product>,
  ) {}

  findAll(category?: Category): Promise<Product[]> {
    const options: any = {
      relations: ['category', 'photos'],
    };

    if (category) {
      options.where = { category };
    }

    return this.repository.find(options);
  }

  findById(id: string): Promise<Product | null> {
    return this.repository.findOne({
      where: { id },
      relations: ['category', 'brand', 'photos'],
    });
  }

  save(product: Product): Promise<Product> {
    return this.repository.save(product);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
