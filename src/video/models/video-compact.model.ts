import { BaseChannel } from "@channel/models";
import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Thumbnail } from "@shared/models";

@ObjectType({})
export class VideoCompact {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => BaseChannel, { nullable: true })
  channel?: BaseChannel;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  duration: number;

  @Field(() => Boolean)
  isLive: boolean;

  @Field(() => String, { nullable: true })
  uploadDate?: string;

  @Field(() => Int, { nullable: true })
  viewCount?: number;

  @Field(() => [Thumbnail])
  thumbnails: Thumbnail[];
}
