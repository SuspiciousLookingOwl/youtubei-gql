import { BaseChannel } from "@channel/models";
import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Thumbnail, VideoCompacts } from "@shared/models";

@ObjectType({ isAbstract: true })
export class BaseVideo {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => BaseChannel, { nullable: true })
  channel?: BaseChannel;

  @Field(() => String)
  description: string;

  @Field(() => Boolean)
  isLiveContent: boolean;

  @Field(() => String, { nullable: true })
  uploadDate?: string;

  @Field(() => Int, { nullable: true })
  viewCount?: number;

  @Field(() => [Thumbnail])
  thumbnails: Thumbnail[];

  @Field(() => VideoCompacts)
  related: VideoCompacts;
}
