import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
// import { Subscription } from './subscription.entity';

@Schema()
export class SubscriptionDetail extends Document {
  @Prop({ type: String, default: () => v4() })
  id: string;

  // @Prop({ type: String, ref: Subscription.name })
  // subscription_ref: string;

  @Prop({ type: String })
  title: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: Date, default: Date.now })
  created_at: Date;

  @Prop({ type: Date, default: Date.now })
  updated_at: Date;
}

export const SubscriptionDetailSchema =
  SchemaFactory.createForClass(SubscriptionDetail);

// example calling to schema from schema children
// const subscriptionDetail = await SubscriptionDetail.findById('detailId').populate('subscriptionId');

/*

const subscriptionDetails = await SubscriptionDetail.find({
  subscriptionId: {
    $elemMatch: {
      price: { $gt: 100 }, // Filtra por precio de suscripción > 100
    },
  },
}).populate('subscriptionId');

console.log(subscriptionDetails.map(detail => detail.subscription.title)); // Imprime títulos de las suscripciones que cumplen el filtro

*/
