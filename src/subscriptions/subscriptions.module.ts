import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionsController } from './subscriptions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Subscription,
  SubscriptionSchema,
} from './entities/subscription.entity';
import { CommonModule } from 'src/common/common.module';
import { PassportModule } from '@nestjs/passport';
import { SubscriptionDetailSchema } from './entities/subscription-detail.entity';
import { SubscriptionQuantitySchema } from './entities/subscription-quantity.entity';
import { SubscriptionDetail } from './entities/subscription-detail.entity';
import { SubscriptionQuantity } from './entities/subscription-quantity.entity';

@Module({
  controllers: [SubscriptionsController],
  imports: [
    CommonModule,
    PassportModule,
    MongooseModule.forFeature([
      { name: Subscription.name, schema: SubscriptionSchema },
      { name: SubscriptionDetail.name, schema: SubscriptionDetailSchema },
      { name: SubscriptionQuantity.name, schema: SubscriptionQuantitySchema },
    ]),
  ],
  providers: [SubscriptionsService],
})
export class SubscriptionsModule {}
