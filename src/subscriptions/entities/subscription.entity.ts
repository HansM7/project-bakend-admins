import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';

@Schema()
export class Subscription extends Document {
  @Prop({ type: String, default: () => v4() })
  id: string;

  @Prop({ type: String, unique: true })
  title: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: Number })
  price: number;

  @Prop({ type: Date, default: Date.now })
  created_at: Date;

  @Prop({ type: Date, default: Date.now })
  updated_at: Date;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
