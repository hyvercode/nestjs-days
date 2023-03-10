import { Module } from '@nestjs/common';
import { BiddingsService } from './biddings.service';
import { BiddingsGateway } from './biddings.gateway';

@Module({
  providers: [BiddingsGateway, BiddingsService]
})
export class BiddingsModule {}
