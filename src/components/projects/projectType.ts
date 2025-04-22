import { Url } from "next/dist/shared/lib/router/router";
import { JSX } from "react";

export type projectType = {
  title: string;
  pLink: Url;
  gLink: Url;
  description: string;
  tech: JSX.Element[];
};
