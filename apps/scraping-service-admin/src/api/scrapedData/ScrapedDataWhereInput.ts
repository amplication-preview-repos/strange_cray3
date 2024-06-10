import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { KeywordWhereUniqueInput } from "../keyword/KeywordWhereUniqueInput";

export type ScrapedDataWhereInput = {
  content?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  keyword?: KeywordWhereUniqueInput;
};
