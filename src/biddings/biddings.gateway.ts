import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { BiddingsService } from './biddings.service';
import { CreateBiddingDto } from './dto/create-bidding.dto';
import { UpdateBiddingDto } from './dto/update-bidding.dto';

@WebSocketGateway()
export class BiddingsGateway {
  constructor(private readonly biddingsService: BiddingsService) {}

  @SubscribeMessage('createBidding')
  create(@MessageBody() createBiddingDto: CreateBiddingDto) {
    return this.biddingsService.create(createBiddingDto);
  }

  @SubscribeMessage('findAllBiddings')
  findAll() {
    return this.biddingsService.findAll();
  }

  @SubscribeMessage('findOneBidding')
  findOne(@MessageBody() id: number) {
    return this.biddingsService.findOne(id);
  }

  @SubscribeMessage('updateBidding')
  update(@MessageBody() updateBiddingDto: UpdateBiddingDto) {
    return this.biddingsService.update(updateBiddingDto.id, updateBiddingDto);
  }

  @SubscribeMessage('removeBidding')
  remove(@MessageBody() id: number) {
    return this.biddingsService.remove(id);
  }
}
