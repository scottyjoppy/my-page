import { Json } from "types/database.types";

//
// 🔧 Easy-to-edit mappings
//
const markMap = {
  bold: "**",
  italic: "*",
} as const;

const headingMap: Record<string, string> = {
  h1: "# ",
  h2: "## ",
  h3: "### ",
  h4: "#### ",
  h5: "##### ",
  h6: "###### ",
};

//
// 🔧 Strong type for our content blocks
//
export type JsonBlock = {
  type: string;
  style?: string;
  text?: string;
  lang?: string;
  href?: string;
  number?: string;
  children?: JsonBlock[];
  marks?: (keyof typeof markMap)[];
};

//
// 🔧 Type guards
//
function isBlock(value: any): value is JsonBlock {
  return typeof value === "object" && value !== null && "type" in value;
}

function isBlockArray(value: any): value is JsonBlock[] {
  return Array.isArray(value) && value.every(isBlock);
}

//
// 🔄 Recursively convert blocks
//
function convertBlock(block: JsonBlock): string {
  const { type, text, marks, children, style, lang, href, number } = block;

  //
  // Compute marks for ANY block
  //
  const markTokens = (marks || []).map((mark) => markMap[mark] ?? "*");
  const open = markTokens.join("");
  const close = markTokens.slice().reverse().join("");

  //
  // Helper: wrap text with marks
  //
  const wrap = (str: string) => open + str + close;

  // ---- SPAN -----------------------------------------------------
  if (type === "span") {
    return wrap(text ?? "");
  }

  // ---- LINK -----------------------------------------------------
  // Marks wrap the LABEL, not the URL.
  if (type === "link") {
    return wrap(`[${text}](${href})`);
  }

  // ---- HEADING --------------------------------------------------
  if (type === "heading") {
    const prefix = headingMap[style ?? "h1"] ?? "# ";
    const content = text ?? "";
    return prefix + wrap(content) + "\n";
  }

  // ---- PARAGRAPH / BLOCK ---------------------------------------
  if (type === "block" || type === "paragraph") {
    const inner = (children || []).map(convertBlock).join("");
    return wrap(inner) + "\n";
  }

  // ---- CODE BLOCK ----------------------------------------------
  // Markdown spec: marks SHOULD NOT wrap code content.
  if (type === "code") {
    return "\n" + "```" + (lang ?? "") + "\n" + (text ?? "") + "\n```\n";
  }

  // ---- LIST ----------------------------------------------------
  if (type === "list") {
    if (style === "number") {
      return (number ?? "") + ". " + (children || []).map(convertBlock).join("");
    } else {
      return "- " + (children || []).map(convertBlock).join("");
    }
  }

  // ---- FALLBACK -------------------------------------------------
  if (text) {
    return wrap(text) + "\n";
  }

  return "";
}

//
// 🌲 Main JSON → Markdown converter
//
function parseJson(json: Json): string {
  if (isBlock(json)) {
    return convertBlock(json);
  }

  if (isBlockArray(json)) {
    return json.map(convertBlock).join("");
  }

  return ""; // ignored non-blocks
}

export default function jsonToMd(json: Json) {
  return parseJson(json);
}
