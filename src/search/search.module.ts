import { Module } from "@nestjs/common";
import { SearchQueryResolver } from "./resolvers";

@Module({
  providers: [SearchQueryResolver],
})
export class SearchModule {}
