import { Keyword } from "../keyword/Keyword";

export type ScrapedData = {
  content: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  keyword?: Keyword | null;
  updatedAt: Date;
};
