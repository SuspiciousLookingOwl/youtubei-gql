import { ChannelArgs, ChannelArgsSchema } from "@channel/dtos";
import { Channel } from "@channel/models";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { SearchArgs, SearchArgsSchema } from "@shared/dtos";
import { BaseChannels } from "@shared/models";
import { JoiPipe } from "nestjs-joi";
import * as youtubei from "youtubei";

@Resolver()
export class ChannelQueryResolver {
  constructor(private readonly client: youtubei.Client) {}

  @Query(() => BaseChannels)
  async channels(
    @Args(new JoiPipe(SearchArgsSchema)) args: SearchArgs,
  ): Promise<youtubei.SearchResult<"channel">> {
    const result = await this.client.search(args.keyword, { type: "channel" });

    for (let i = 1; i < args.next; i++) {
      await result.next();
    }

    return result;
  }

  @Query(() => Channel)
  async channel(
    @Args(new JoiPipe(ChannelArgsSchema)) args: ChannelArgs,
  ): Promise<youtubei.Channel> {
    return await this.client.getChannel(args.id);
  }
}
