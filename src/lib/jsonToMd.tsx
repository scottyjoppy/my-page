import { Json } from "types/database.types";

export type JsonBlock =
  | {
      type: string;
      style?: string;
      text: string;
      marks?: string[];
    }
  | {
      type: string;
      style?: string;
      children: JsonBlock[];
    };

const parseJson = (json: Json) => {
  let output: string[] = [];

  if (typeof json !== "object" || json === null) return output;

  const recurseJson = (block: JsonBlock) => {
    if ("children" in block && Array.isArray(block.children)) {
      block.children.forEach(recurseJson);
    } else if ("text" in block && typeof block.text === "string") {
      output.push(block.text);
    }
  };

  recurseJson(json as JsonBlock);
  return output;
};

export default function jsonToMd(json: Json) {
  const string = parseJson(json);

  return <div>{string.join("")}</div>;
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
