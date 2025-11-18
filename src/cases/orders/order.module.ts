/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderItem } from './order-item.entity';
import { CustomerModule } from '../customers/customer.module';
@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem]), CustomerModule],

  providers: [OrderService],
  controllers: [OrderController],
  exports: [OrderService],
})
export class OrderModule {}
