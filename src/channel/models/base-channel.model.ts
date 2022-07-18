import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Thumbnail, VideoCompacts } from "@shared/models";
import { ChannelPlaylists } from "./channel-playlists.model";

@ObjectType({})
export class BaseChannel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  subscriberCount?: string;

  @Field(() => Int, { nullable: true })
  videoCount?: number;

  @Field(() => ChannelPlaylists)
  playlists: ChannelPlaylists;

  @Field(() => VideoCompacts)
  videos: VideoCompacts;

  @Field(() => [Thumbnail])
  thumbnails: Thumbnail[];

  @Field(() => String)
  url: string;
}
