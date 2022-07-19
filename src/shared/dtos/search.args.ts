import { ArgsType, Field } from "@nestjs/graphql";
import * as Joi from "joi";
import { ContinuableArgs, ContinuableArgsSchema } from "./continuable.args";

@ArgsType()
export class SearchArgs extends ContinuableArgs {
  @Field(() => String, { nullable: true })
  keyword?: string;
}

export const SearchArgsSchema = ContinuableArgsSchema({
  keyword: Joi.string().optional(),
});
