import { BaseChannel } from "@channel/models";
import { Field, ObjectType } from "@nestjs/graphql";
import { Continuable } from "./continuable.model";

@ObjectType({})
export class BaseChannels extends Continuable<BaseChannel> {
  @Field(() => [BaseChannel])
  items: BaseChannel[];
}
