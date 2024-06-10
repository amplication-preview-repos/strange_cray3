import { Keyword as TKeyword } from "../api/keyword/Keyword";

export const KEYWORD_TITLE_FIELD = "keyword";

export const KeywordTitle = (record: TKeyword): string => {
  return record.keyword?.toString() || String(record.id);
};
