import { BaseChannel } from "@channel/models";
import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Thumbnail, VideoCompacts } from "@shared/models";

@ObjectType({})
export class Playlist {
  @Field(() => ID)
  id: string;

  @Field(() => BaseChannel, { nullable: true })
  channel?: BaseChannel;

  @Field(() => [Thumbnail])
  thumbnails: Thumbnail[];

  @Field(() => Int)
  videoCount: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  lastUpdatedAt: string;

  @Field(() => VideoCompacts)
  videos: VideoCompacts;
}
