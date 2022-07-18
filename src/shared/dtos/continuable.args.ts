import { ArgsType, Field, Int } from "@nestjs/graphql";
import * as Joi from "joi";

@ArgsType()
export class ContinuableArgs {
  @Field(() => Int)
  next = 1;

  @Field(() => Int, { nullable: true })
  limit?: number;

  @Field(() => Int, { nullable: true })
  continuation?: string;
}

export const ContinuableArgsSchema = Joi.object({
  next: Joi.number().min(1).optional(),
  limit: Joi.number().min(1).optional(),
  continuation: Joi.string().optional(),
});
