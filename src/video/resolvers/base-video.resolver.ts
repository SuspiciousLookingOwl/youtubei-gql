import { Args, Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { ContinuableArgs, ContinuableArgsSchema } from "@shared/dtos";
import { VideoCompacts } from "@shared/models";
import { ContinuableUtils } from "@shared/utils";
import { Video } from "@video/models";
import { JoiPipe } from "nestjs-joi";
import * as youtubei from "youtubei";

class BaseVideoResolver {
  protected async resolveRelated(
    video: youtubei.BaseVideo,
    args: ContinuableArgs,
  ) {
    await ContinuableUtils.resolveContinuable(args, video.related, 1);
    return video.related;
  }
}

@Resolver(() => Video)
export class VideoResolver extends BaseVideoResolver {
  @ResolveField(() => VideoCompacts)
  async related(
    @Parent() video: youtubei.BaseVideo,
    @Args(new JoiPipe(ContinuableArgsSchema())) args: ContinuableArgs,
  ): Promise<youtubei.VideoRelated> {
    return this.resolveRelated(video, args);
  }
}
