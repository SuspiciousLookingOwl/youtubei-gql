import { ChannelModule } from "@channel/channel.module";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Global, Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PlaylistModule } from "@playlist/playlist.module";
import { join } from "path";
import { Client } from "youtubei";
import { SearchModule } from "./search/search.module";
import { VideoModule } from "./video/video.module";

@Global()
@Module({
  providers: [
    {
      provide: Client,
      useValue: new Client(),
    },
  ],
  exports: [Client],
})
class GlobalModule {}

@Module({
  imports: [
    GlobalModule,
    ChannelModule,
    VideoModule,
    PlaylistModule,
    SearchModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
    }),
  ],
})
export class AppModule {}
