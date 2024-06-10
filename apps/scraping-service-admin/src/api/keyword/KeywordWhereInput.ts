import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ScrapedDataListRelationFilter } from "../scrapedData/ScrapedDataListRelationFilter";

export type KeywordWhereInput = {
  id?: StringFilter;
  keyword?: StringNullableFilter;
  scrapedDataItems?: ScrapedDataListRelationFilter;
};
