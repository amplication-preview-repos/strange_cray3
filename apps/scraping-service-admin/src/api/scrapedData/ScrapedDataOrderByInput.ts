import { SortOrder } from "../../util/SortOrder";

export type ScrapedDataOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  keywordId?: SortOrder;
  updatedAt?: SortOrder;
};
