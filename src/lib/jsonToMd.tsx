import { Json } from "types/database.types";

export type JsonBlock = {
  type: string;
  style?: string;
  text?: string;
  children?: JsonBlock[];
  marks?: string[];
};

const parseJson = (json: Json) => {
  let output: string[] = [];

  if (typeof json !== "object" || json === null) return output;

  const recurseJson = (block: JsonBlock) => {
    if (block.children) {
      block.children.forEach(recurseJson);
    } else if (block.type === "span") {
      const marks = block.marks || [];

      // Open marks
      for (const mark of marks) {
        if (mark === "bold") output.push("**");
        if (mark === "italic") output.push("*");
      }

      if (block.text) {
        output.push(block.text);
      }

      for (const mark of marks.slice().reverse()) {
        if (mark === "bold") output.push("**");
        if (mark === "italic") output.push("*");
      }
    } else if ("text" in block) {
      if (block.type === "heading") {
        let hash = "";
        switch (block.style) {
          case "h2":
            hash = "## ";
            break;
          case "h3":
            hash = "### ";
            break;
          default:
            hash = "# ";
        }
        output.push(hash);
      } else if (block.type === "code") {
      } else if (block.type === null || block.type === undefined) {
        output.push;
      }

      output.push(block.text);
      output.push("\n");
    }
  };

  recurseJson(json as JsonBlock);
  return output;
};

export default function jsonToMd(json: Json) {
  const string = parseJson(json);

  return string.join("");
}

/*
types

heading 1-6 #
paragraph
code ```
img ![](/assets/images/boat.jpg "image of boat")
link []()
uolist -
olist 1.
blockquotes >
line ---

style
italics <em> *cat*
bold <strong> **cat**
both <em><strong> ***cat***


jsonBlock {
  type: string;
  style?: string;
  text or children
  text?: string
  chidren?: array
  marks?: string

}


*/
