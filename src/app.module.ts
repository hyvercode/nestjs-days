import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { BiddingsModule } from './biddings/biddings.module';

@Module({
  imports: [CatsModule, UsersModule, BiddingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
