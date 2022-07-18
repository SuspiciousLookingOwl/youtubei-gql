import { Module } from "@nestjs/common";
import { PlaylistCompactResolver, PlaylistQueryResolver } from "./resolvers";
import { PlaylistResolver } from "./resolvers/playlist.resolver";

@Module({
  providers: [PlaylistQueryResolver, PlaylistResolver, PlaylistCompactResolver],
})
export class PlaylistModule {}
