import { ScrapedData } from "../scrapedData/ScrapedData";

export type Keyword = {
  createdAt: Date;
  id: string;
  keyword: string | null;
  scrapedDataItems?: Array<ScrapedData>;
  updatedAt: Date;
};
