import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { ProductPhoto } from '../entities/product-photo-entity';
import { ProductPhotoService } from '../services/product-photo.service';
import { ProductService } from '../services/product.service';
import { validate } from 'uuid';

@Controller('products')
export class ProductPhotoController {
  constructor(
    private readonly service: ProductPhotoService,
    private readonly productService: ProductService,
  ) {}

  @Get()
  async findAll(
    @Query('productId') productId?: string,
  ): Promise<ProductPhoto[]> {
    if (productId) {
      if (!validate(productId)) {
        throw new BadRequestException('Invalid productId');
      }

      const product = await this.productService.findById(productId);
      return this.service.findAll(product ?? undefined);
    }

    return this.service.findAll();
  }
}
