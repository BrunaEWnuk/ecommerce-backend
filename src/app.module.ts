import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './cases/categories/category.module';
import { BrandModule } from './cases/brands/brand.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-sa-east-1.pooler.supabase.com',
      port: +'5432',
      username: 'postgres.onovtbavghhzcywjwacr',
      password: 'POSTGRES',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true, //só da para utilizar como True em desenvolvimento, pq tudo vai sincronizar com banco
    }),
    CategoryModule,
    BrandModule,
  ],
})
export class AppModule {}
