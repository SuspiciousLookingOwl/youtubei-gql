import { Args, Query, Resolver } from "@nestjs/graphql";
import { PlaylistArgs, PlaylistArgsSchema } from "@playlist/dtos";
import { Playlist } from "@playlist/models";
import { SearchArgs, SearchArgsSchema } from "@shared/dtos";
import { PlaylistCompacts } from "@shared/models";
import { ContinuableUtils } from "@shared/utils";
import { JoiPipe } from "nestjs-joi";
import * as youtubei from "youtubei";

@Resolver()
export class PlaylistQueryResolver {
  constructor(private readonly client: youtubei.Client) {}

  @Query(() => PlaylistCompacts)
  async playlists(
    @Args(new JoiPipe(SearchArgsSchema)) args: SearchArgs,
  ): Promise<youtubei.SearchResult<"playlist">> {
    const result = await this.client.search(args.keyword, { type: "playlist" });
    await ContinuableUtils.resolveContinuable(args, result, 1);
    return result;
  }

  @Query(() => Playlist)
  async playlist(
    @Args(new JoiPipe(PlaylistArgsSchema)) args: PlaylistArgs,
  ): Promise<youtubei.Playlist> {
    return await this.client.getPlaylist(args.id);
  }
}
