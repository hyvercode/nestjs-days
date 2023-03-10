import { Test, TestingModule } from '@nestjs/testing';
import { BiddingsGateway } from './biddings.gateway';
import { BiddingsService } from './biddings.service';

describe('BiddingsGateway', () => {
  let gateway: BiddingsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiddingsGateway, BiddingsService],
    }).compile();

    gateway = module.get<BiddingsGateway>(BiddingsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
