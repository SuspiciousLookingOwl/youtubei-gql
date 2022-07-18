import { Args, Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Playlist } from "@playlist/models";
import { ContinuableArgs, ContinuableArgsSchema } from "@shared/dtos";
import { VideoCompacts } from "@shared/models";
import { ContinuableUtils } from "@shared/utils";
import { JoiPipe } from "nestjs-joi";
import * as youtubei from "youtubei";

@Resolver(() => Playlist)
export class PlaylistResolver {
  @ResolveField(() => VideoCompacts)
  async videos(
    @Parent() playlist: youtubei.Playlist,
    @Args(new JoiPipe(ContinuableArgsSchema)) args: ContinuableArgs,
  ): Promise<youtubei.PlaylistVideos> {
    await ContinuableUtils.resolveContinuable(args, playlist.videos, 1);
    return playlist.videos;
  }
}
