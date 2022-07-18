import { ArgsType, Field, ID } from "@nestjs/graphql";
import * as Joi from "joi";

@ArgsType()
export class ChannelArgs {
  @Field(() => ID)
  id: string;
}

export const ChannelArgsSchema = Joi.object({
  id: Joi.string().required(),
});
