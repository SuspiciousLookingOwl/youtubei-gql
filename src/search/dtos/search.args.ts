import { ArgsType, Field } from "@nestjs/graphql";
import * as Joi from "joi";

@ArgsType()
export class SearchArgs {
  @Field(() => String)
  keyword: string;

  @Field(() => String, { nullable: true })
  type: "all" | "video" | "channel" | "playlist";

  @Field(() => String, { nullable: true })
  duration: "all" | "short" | "medium" | "long";

  @Field(() => String, { nullable: true })
  sortBy: "relevance" | "rating" | "date" | "view";

  @Field(() => String, { nullable: true })
  uploadDate: "all" | "hour" | "today" | "week" | "month" | "year";
}

export const SearchArgsSchema = Joi.object({
  keyword: Joi.string().required(),
  type: Joi.string().optional().valid("video", "playlist", "channel", "all"),
  duration: Joi.string().optional().valid("all", "long", "medium", "short"),
  sortBy: Joi.string().optional().valid("date", "rating", "relevance", "view"),
  uploadDate: Joi.string()
    .optional()
    .valid("all", "hour", "today", "week", "month", "year"),
});
