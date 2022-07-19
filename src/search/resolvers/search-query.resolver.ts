import { Args, Query, Resolver } from "@nestjs/graphql";
import { SearchArgs, SearchArgsSchema } from "@shared/dtos";
import { CompactUnions } from "@shared/models";
import { ContinuableUtils } from "@shared/utils";
import { JoiPipe } from "nestjs-joi";
import * as youtubei from "youtubei";

@Resolver()
export class SearchQueryResolver {
  constructor(private readonly client: youtubei.Client) {}

  @Query(() => CompactUnions)
  async search(
    @Args(new JoiPipe(SearchArgsSchema)) args: SearchArgs,
  ): Promise<youtubei.SearchResult> {
    const { keyword, ...rest } = args;
    const { next, limit, continuation, ...options } = rest;

    let result: youtubei.SearchResult;
    let startsFrom: number;

    if (continuation) {
      result = new youtubei.SearchResult({ client: this.client });
      result.continuation = continuation;
      startsFrom = 0;
    } else {
      result = await this.client.search(keyword, options);
      startsFrom = 1;
    }

    await ContinuableUtils.resolveContinuable(
      { next, limit },
      result,
      startsFrom,
    );

    return result;
  }
}
