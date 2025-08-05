/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-sa-east-1.pooler.supabase.com',
      port: +'5432',
      username: 'postgres.onovtbavghhzcywjwacr',
      password: 'POSTGRES',
      database: 'postgres',
    }),
  ],
})
export class AppModule {}
