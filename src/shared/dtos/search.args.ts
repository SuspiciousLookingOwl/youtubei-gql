import { ArgsType, Field } from "@nestjs/graphql";
import * as Joi from "joi";
import { ContinuableArgs, ContinuableArgsSchema } from "./continuable.args";

@ArgsType()
export class SearchArgs extends ContinuableArgs {
  @Field(() => String)
  keyword: string;
}

export const SearchArgsSchema = ContinuableArgsSchema.keys({
  keyword: Joi.string().required(),
});
