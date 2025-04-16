import { codeInput } from "@sanity/code-input"
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "zlz7h86g",
  dataset: "production",
  title: "My Page Sanity",
  apiVersion: "2025-04-16",
  basePath: "/admin",
  plugins: [structureTool(), codeInput()],
  schema: { types: schemas },
});

export default config;
