import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';

@Schema()
export class Admin extends Document {
  @Prop({ type: String, default: () => v4() })
  id: string;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  last_name: string;

  @Prop({ type: String, unique: true })
  email: string;

  @Prop({ type: String })
  password: string;

  @Prop({ type: Boolean, default: true })
  enabled: string;

  @Prop({ type: Boolean })
  logged: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
