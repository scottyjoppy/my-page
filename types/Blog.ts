import { PortableTextBlock } from "next-sanity";

export type Blog = {
  _id: string;
  _createdAt: Date;
  title: string;
  blogSeries: string;
  blogLine: string;
  description: string;
  date: string;
  slug: string;
  content: PortableTextBlock[];
};
