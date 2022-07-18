import { ArgsType, Field, ID } from "@nestjs/graphql";
import * as Joi from "joi";

@ArgsType()
export class VideoArgs {
  @Field(() => ID)
  id: string;
}

export const VideoArgsSchema = Joi.object({
  id: Joi.string().required(),
});
