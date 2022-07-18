import { Module } from "@nestjs/common";
import { BaseChannelResolver, ChannelQueryResolver } from "./resolvers";

@Module({
  providers: [ChannelQueryResolver, BaseChannelResolver],
})
export class ChannelModule {}
