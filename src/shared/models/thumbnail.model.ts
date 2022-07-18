import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType({})
export class Thumbnail {
  @Field(() => String)
  url: string;

  @Field(() => Int)
  width: number;

  @Field(() => Int)
  height: number;
}
