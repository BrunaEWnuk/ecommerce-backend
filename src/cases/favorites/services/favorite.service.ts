import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorite } from '../entities/favorite.entity';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(Favorite)
    private repo: Repository<Favorite>,
  ) {}

  async isFavorite(customerId: string, productId: string) {
    const exists = await this.repo.findOne({
      where: {
        customer: { id: customerId },
        product: { id: productId },
      },
    });
    return { isFavorite: !!exists };
  }

  async toggle(customerId: string, productId: string) {
    const exists = await this.repo.findOne({
      where: {
        customer: { id: customerId },
        product: { id: productId },
      },
    });

    if (exists) {
      await this.repo.delete(exists.id);
      return { isFavorite: false };
    }

    await this.repo.save({
      customer: { id: customerId },
      product: { id: productId },
    });

    return { isFavorite: true };
  }
}
