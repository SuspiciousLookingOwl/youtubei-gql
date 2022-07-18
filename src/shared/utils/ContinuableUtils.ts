import { ContinuableArgs } from "@shared/dtos";
import * as youtubei from "youtubei";

export class ContinuableUtils {
  static async resolveContinuable<T>(
    args: ContinuableArgs,
    continuable: youtubei.Continuable<T>,
    startsFrom = 0,
  ): Promise<youtubei.Continuable<T>> {
    for (let i = startsFrom; i < args.next; i++) {
      await continuable.next();
    }

    continuable.items = continuable.items.slice(0, args.limit);
    return continuable;
  }
}
