import { Field, ObjectType } from "@nestjs/graphql";
import { CompactUnion, Thumbnail } from "@shared/models";
import { BaseChannel } from "youtubei";

@ObjectType({})
export class Channel extends BaseChannel {
  @Field(() => [Thumbnail])
  banner: Thumbnail[];

  @Field(() => [Thumbnail])
  tvBanner: Thumbnail[];

  @Field(() => [Thumbnail])
  mobileBanner: Thumbnail[];

  @Field(() => [Shelf])
  shelves: Shelf[];
}

@ObjectType()
class Shelf {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  subtitle?: string;

  @Field(() => [CompactUnion])
  items: typeof CompactUnion[];
}
