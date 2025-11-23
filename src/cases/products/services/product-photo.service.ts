import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ProductPhoto } from '../entities/product-photo-entity';

@Injectable()
export class ProductPhotoService {
  constructor(
    @InjectRepository(ProductPhoto)
    private repository: Repository<ProductPhoto>,
  ) {}

  findAll(product?: Product): Promise<ProductPhoto[]> {
    if (!product) {
      return this.repository.find({
        relations: ['product', 'photos'],
      });
    } else {
      return this.repository.find({
        where: { product },
        relations: ['product', 'photos'],
      });
    }
  }

  findById(id: string): Promise<ProductPhoto | null> {
    return this.repository.findOne({
      where: { id },
      relations: ['product', 'photos'],
    });
  }

  save(photo: ProductPhoto): Promise<ProductPhoto> {
    return this.repository.save(photo);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
