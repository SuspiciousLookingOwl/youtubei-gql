import { Args, Query, Resolver } from "@nestjs/graphql";
import { SearchArgs, SearchArgsSchema } from "@shared/dtos";
import { VideoCompacts } from "@shared/models";
import { ContinuableUtils } from "@shared/utils";
import { VideoArgs, VideoArgsSchema } from "@video/dtos";
import { Video } from "@video/models";
import { JoiPipe } from "nestjs-joi";
import * as youtubei from "youtubei";
import { SearchResult } from "youtubei";

@Resolver()
export class VideoQueryResolver {
  constructor(private readonly client: youtubei.Client) {}

  @Query(() => VideoCompacts)
  async videos(
    @Args(new JoiPipe(SearchArgsSchema)) args: SearchArgs,
  ): Promise<SearchResult<"video">> {
    const result = await this.client.search(args.keyword, { type: "video" });
    await ContinuableUtils.resolveContinuable(args, result, 1);
    return result;
  }

  @Query(() => Video)
  async video(
    @Args(new JoiPipe(VideoArgsSchema)) args: VideoArgs,
  ): Promise<youtubei.Video> {
    return await this.client.getVideo(args.id);
  }
}
