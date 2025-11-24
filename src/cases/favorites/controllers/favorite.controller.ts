/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Controller, Get, Post, Param } from '@nestjs/common';
import { FavoriteService } from '../services/favorite.service';

@Controller('favorites')
export class FavoriteController {
  constructor(private service: FavoriteService) {}

  @Get(':customerId/:productId')
  getFavorite(
    @Param('customerId') customerId: string,
    @Param('productId') productId: string,
  ) {
    return this.service.isFavorite(customerId, productId);
  }

  @Post(':customerId/:productId')
  toggle(
    @Param('customerId') customerId: string,
    @Param('productId') productId: string,
  ) {
    return this.service.toggle(customerId, productId);
  }
}
