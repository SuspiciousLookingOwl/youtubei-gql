import { Module } from "@nestjs/common";
import { VideoQueryResolver, VideoResolver } from "./resolvers";

@Module({
  providers: [VideoQueryResolver, VideoResolver],
})
export class VideoModule {}
