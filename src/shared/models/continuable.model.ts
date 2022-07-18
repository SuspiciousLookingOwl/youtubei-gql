import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType({ isAbstract: true })
export abstract class Continuable<T> {
  @Field(() => String, { nullable: true })
  continuation?: string;

  abstract items: T[];
}
