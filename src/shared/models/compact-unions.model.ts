import { BaseChannel } from "@channel/models";
import { Field, ObjectType } from "@nestjs/graphql";
import { PlaylistCompact } from "@playlist/models";
import { VideoCompact } from "@video/models";
import { CompactUnion } from "./compact-union.model";
import { Continuable } from "./continuable.model";

@ObjectType({})
export class CompactUnions extends Continuable<
  BaseChannel | VideoCompact | PlaylistCompact
> {
  @Field(() => [CompactUnion])
  items: (BaseChannel | VideoCompact | PlaylistCompact)[];
}
