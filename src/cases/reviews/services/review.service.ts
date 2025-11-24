import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from '../entities/review.entity';
import { CreateReviewDto } from '../dtos/review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private repo: Repository<Review>,
  ) {}

  // Listar reviews de um produto
  async list(productId: string) {
    try {
      return await this.repo.find({
        where: { product: { id: productId } },
        relations: ['customer'],
      });
    } catch (error) {
      console.error('Erro ao listar reviews:', error);
      throw new InternalServerErrorException('Erro ao listar reviews');
    }
  }

  // Criar review
  async create(customerId: string, productId: string, dto: CreateReviewDto) {
    try {
      const review = this.repo.create({
        rating: dto.rating,
        comment: dto.comment,
        customer: { id: customerId },
        product: { id: productId },
      });

      console.log('Review a ser salvo:', review); // <- log do payload

      const saved = await this.repo.save(review);

      console.log('Review salvo com sucesso:', saved); // <- log do resultado

      return saved;
    } catch (error) {
      console.error('Erro ao criar review:', error);
      throw new InternalServerErrorException('Não foi possível criar review');
    }
  }
}
