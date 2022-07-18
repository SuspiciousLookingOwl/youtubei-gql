import { Field, ObjectType } from "@nestjs/graphql";
import { VideoCompact } from "@video/models";
import { Continuable } from "./continuable.model";

@ObjectType()
export class VideoCompacts extends Continuable<VideoCompact> {
  @Field(() => [VideoCompact])
  items: VideoCompact[];
}
