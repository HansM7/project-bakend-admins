import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 } from 'uuid';
// import { Subscription } from './subscription.entity';
import { Document } from 'mongoose';

@Schema()
export class SubscriptionQuantity extends Document {
  @Prop({ type: String, default: () => v4() })
  id: string;

  // @Prop({ type: String, ref: Subscription.name })
  // subscription_ref: string;

  @Prop({ type: String })
  title: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: Number })
  amount: number;

  @Prop({ type: String })
  created_at: string;

  @Prop({ type: String })
  updated_at: string;
}

export const SubscriptionQuantitySchema =
  SchemaFactory.createForClass(SubscriptionQuantity);
