import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScrapedDataModuleBase } from "./base/scrapedData.module.base";
import { ScrapedDataService } from "./scrapedData.service";
import { ScrapedDataController } from "./scrapedData.controller";
import { ScrapedDataResolver } from "./scrapedData.resolver";

@Module({
  imports: [ScrapedDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScrapedDataController],
  providers: [ScrapedDataService, ScrapedDataResolver],
  exports: [ScrapedDataService],
})
export class ScrapedDataModule {}
