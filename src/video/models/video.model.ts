import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseVideo } from "./base-video.model";

@ObjectType({})
export class Video extends BaseVideo {
  @Field(() => Int)
  duration!: number;
}
