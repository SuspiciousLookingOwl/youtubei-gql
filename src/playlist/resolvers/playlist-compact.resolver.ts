import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Playlist, PlaylistCompact } from "@playlist/models";
import * as youtubei from "youtubei";

@Resolver(() => PlaylistCompact)
export class PlaylistCompactResolver {
  @ResolveField(() => Playlist)
  async playlist(
    @Parent() playlist: youtubei.PlaylistCompact,
  ): Promise<youtubei.Playlist> {
    return await playlist.getPlaylist();
  }
}
