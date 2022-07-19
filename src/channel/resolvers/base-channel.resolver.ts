import { BaseChannel, ChannelPlaylists } from "@channel/models";
import { Args, Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { ContinuableArgs, ContinuableArgsSchema } from "@shared/dtos";
import { VideoCompacts } from "@shared/models";
import { ContinuableUtils } from "@shared/utils";
import { JoiPipe } from "nestjs-joi";
import * as youtubei from "youtubei";

@Resolver(() => BaseChannel)
export class BaseChannelResolver {
  @ResolveField(() => VideoCompacts)
  async videos(
    @Parent() channel: youtubei.BaseChannel,
    @Args(new JoiPipe(ContinuableArgsSchema())) args: ContinuableArgs,
  ): Promise<youtubei.ChannelVideos> {
    await ContinuableUtils.resolveContinuable(args, channel.videos);
    return channel.videos;
  }

  @ResolveField(() => ChannelPlaylists)
  async playlists(
    @Parent() channel: youtubei.BaseChannel,
    @Args(new JoiPipe(ContinuableArgsSchema())) args: ContinuableArgs,
  ): Promise<youtubei.ChannelPlaylists> {
    await ContinuableUtils.resolveContinuable(args, channel.playlists);
    return channel.playlists;
  }
}
