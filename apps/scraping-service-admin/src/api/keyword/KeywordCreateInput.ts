import { ScrapedDataCreateNestedManyWithoutKeywordsInput } from "./ScrapedDataCreateNestedManyWithoutKeywordsInput";

export type KeywordCreateInput = {
  keyword?: string | null;
  scrapedDataItems?: ScrapedDataCreateNestedManyWithoutKeywordsInput;
};
