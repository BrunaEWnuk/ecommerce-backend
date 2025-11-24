import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ReviewService } from '../services/review.service';

@Controller('reviews')
export class ReviewController {
  constructor(private service: ReviewService) {}

  @Get(':productId')
  list(@Param('productId') productId: string) {
    return this.service.list(productId);
  }

  @Post(':customerId/:productId')
  create(
    @Param('customerId') customerId: string,
    @Param('productId') productId: string,
    @Body() dto: any,
  ) {
    return this.service.create(customerId, productId, dto);
  }
}
