import { BaseChannel } from "@channel/models";
import { createUnionType } from "@nestjs/graphql";
import { PlaylistCompact } from "@playlist/models";
import { VideoCompact } from "@video/models";
import * as youtubei from "youtubei";

export const CompactUnion = createUnionType({
  name: "CompactUnion",
  types: () => [BaseChannel, VideoCompact, PlaylistCompact] as const,
  resolveType(value) {
    if (value instanceof youtubei.BaseChannel) return BaseChannel;
    if (value instanceof youtubei.VideoCompact) return VideoCompact;
    return PlaylistCompact;
  },
});
