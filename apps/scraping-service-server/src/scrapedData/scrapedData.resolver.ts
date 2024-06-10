import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ScrapedDataResolverBase } from "./base/scrapedData.resolver.base";
import { ScrapedData } from "./base/ScrapedData";
import { ScrapedDataService } from "./scrapedData.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ScrapedData)
export class ScrapedDataResolver extends ScrapedDataResolverBase {
  constructor(
    protected readonly service: ScrapedDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
