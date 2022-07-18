import { Args, Query, Resolver } from "@nestjs/graphql";
import { SearchArgs, SearchArgsSchema } from "@shared/dtos";
import { CompactUnions } from "@shared/models";
import { ContinuableUtils } from "@shared/utils";
import { JoiPipe } from "nestjs-joi";
import * as youtubei from "youtubei";
import { SearchResult } from "youtubei";

@Resolver()
export class SearchQueryResolver {
  constructor(private readonly client: youtubei.Client) {}

  @Query(() => CompactUnions)
  async search(
    @Args(new JoiPipe(SearchArgsSchema)) args: SearchArgs,
  ): Promise<SearchResult<"all">> {
    const { keyword, ...rest } = args;
    const { next, limit, continuation, ...options } = rest;

    const result = await this.client.search(keyword, options);
    await ContinuableUtils.resolveContinuable(
      { next, limit, continuation },
      result,
      1,
    );
    return result;
  }
}
