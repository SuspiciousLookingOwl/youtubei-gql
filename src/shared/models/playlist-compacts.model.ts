import { Field, ObjectType } from "@nestjs/graphql";
import { PlaylistCompact } from "@playlist/models";
import { Continuable } from "@shared/models";

@ObjectType({})
export class PlaylistCompacts extends Continuable<PlaylistCompact> {
  @Field(() => [PlaylistCompact])
  items: PlaylistCompact[];
}
