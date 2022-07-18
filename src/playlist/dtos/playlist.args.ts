import { ArgsType, Field, ID } from "@nestjs/graphql";
import * as Joi from "joi";

@ArgsType()
export class PlaylistArgs {
  @Field(() => ID)
  id: string;
}

export const PlaylistArgsSchema = Joi.object({
  id: Joi.string().required(),
});
