import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';

export class Clinic extends Document {
  @Prop({ type: String, default: () => v4() })
  id: string;

  @Prop({
    type: Object,
  })
  represented_ref: object;

  @Prop({
    type: Object,
  })
  type_ref: object;

  @Prop({
    type: Object,
  })
  admin_ref: object;

  // todo  ------ references code's about clinic

  @Prop({
    type: String,
    unique: true,
  })
  business_name: string;

  @Prop({
    type: String,
    unique: true,
  })
  ruc: string;

  @Prop({
    type: String,
    unique: true,
  })
  code_representation: string;

  // todo  ------ references code's about clinic

  @Prop({
    type: String,
  })
  description: string;

  @Prop({
    type: String,
  })
  phone_number: string;

  @Prop({
    type: String,
  })
  direction: string;

  @Prop({
    type: String,
  })
  email: string;

  @Prop({
    type: Boolean,
  })
  extra: boolean;

  @Prop({
    type: Boolean,
  })
  enabled: boolean;

  @Prop({
    type: String,
  })
  created_at: string;

  @Prop({
    type: String,
  })
  updated_at: string;
}

export const ClinicSchema = SchemaFactory.createForClass(Clinic);
