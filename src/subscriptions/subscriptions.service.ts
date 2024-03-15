import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Subscription } from './entities/subscription.entity';
import { Model } from 'mongoose';
import { ResponseService } from 'src/common/services/response.service';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectModel(Subscription.name)
    private readonly subscriptionModel: Model<Subscription>,
    private readonly responseService: ResponseService,
  ) {}

  async create(createSubscriptionDto: CreateSubscriptionDto) {
    try {
      const subscription = await this.subscriptionModel.create(
        createSubscriptionDto,
      );
      return this.responseService.createResponse(
        true,
        'Subscription created successfully',
        subscription,
      );
    } catch (error) {
      this.responseService.createErrors(error);
    }
  }

  findAll() {
    return `This action returns all subscriptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscription`;
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return `This action updates a #${id} subscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscription`;
  }
}
