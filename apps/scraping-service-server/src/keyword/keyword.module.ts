import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { KeywordModuleBase } from "./base/keyword.module.base";
import { KeywordService } from "./keyword.service";
import { KeywordController } from "./keyword.controller";
import { KeywordResolver } from "./keyword.resolver";

@Module({
  imports: [KeywordModuleBase, forwardRef(() => AuthModule)],
  controllers: [KeywordController],
  providers: [KeywordService, KeywordResolver],
  exports: [KeywordService],
})
export class KeywordModule {}
