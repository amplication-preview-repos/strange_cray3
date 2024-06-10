import { KeywordWhereUniqueInput } from "../keyword/KeywordWhereUniqueInput";

export type ScrapedDataUpdateInput = {
  content?: string | null;
  email?: string | null;
  keyword?: KeywordWhereUniqueInput | null;
};
