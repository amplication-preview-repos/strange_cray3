import { KeywordWhereUniqueInput } from "../keyword/KeywordWhereUniqueInput";

export type ScrapedDataCreateInput = {
  content?: string | null;
  email?: string | null;
  keyword?: KeywordWhereUniqueInput | null;
};
