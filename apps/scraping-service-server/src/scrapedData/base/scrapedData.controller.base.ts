/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ScrapedDataService } from "../scrapedData.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ScrapedDataCreateInput } from "./ScrapedDataCreateInput";
import { ScrapedData } from "./ScrapedData";
import { ScrapedDataFindManyArgs } from "./ScrapedDataFindManyArgs";
import { ScrapedDataWhereUniqueInput } from "./ScrapedDataWhereUniqueInput";
import { ScrapedDataUpdateInput } from "./ScrapedDataUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ScrapedDataControllerBase {
  constructor(
    protected readonly service: ScrapedDataService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ScrapedData })
  @nestAccessControl.UseRoles({
    resource: "ScrapedData",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createScrapedData(
    @common.Body() data: ScrapedDataCreateInput
  ): Promise<ScrapedData> {
    return await this.service.createScrapedData({
      data: {
        ...data,

        keyword: data.keyword
          ? {
              connect: data.keyword,
            }
          : undefined,
      },
      select: {
        content: true,
        createdAt: true,
        email: true,
        id: true,

        keyword: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ScrapedData] })
  @ApiNestedQuery(ScrapedDataFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ScrapedData",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async scrapedDataItems(
    @common.Req() request: Request
  ): Promise<ScrapedData[]> {
    const args = plainToClass(ScrapedDataFindManyArgs, request.query);
    return this.service.scrapedDataItems({
      ...args,
      select: {
        content: true,
        createdAt: true,
        email: true,
        id: true,

        keyword: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ScrapedData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ScrapedData",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async scrapedData(
    @common.Param() params: ScrapedDataWhereUniqueInput
  ): Promise<ScrapedData | null> {
    const result = await this.service.scrapedData({
      where: params,
      select: {
        content: true,
        createdAt: true,
        email: true,
        id: true,

        keyword: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ScrapedData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ScrapedData",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateScrapedData(
    @common.Param() params: ScrapedDataWhereUniqueInput,
    @common.Body() data: ScrapedDataUpdateInput
  ): Promise<ScrapedData | null> {
    try {
      return await this.service.updateScrapedData({
        where: params,
        data: {
          ...data,

          keyword: data.keyword
            ? {
                connect: data.keyword,
              }
            : undefined,
        },
        select: {
          content: true,
          createdAt: true,
          email: true,
          id: true,

          keyword: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ScrapedData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ScrapedData",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteScrapedData(
    @common.Param() params: ScrapedDataWhereUniqueInput
  ): Promise<ScrapedData | null> {
    try {
      return await this.service.deleteScrapedData({
        where: params,
        select: {
          content: true,
          createdAt: true,
          email: true,
          id: true,

          keyword: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}