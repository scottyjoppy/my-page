import { JsonBlock } from "./jsonToMd";

export function mdToJson(md: string): JsonBlock[] {
  const lines = md.split("\n");
  const blocks: JsonBlock[] = [];

  let i = 0;
  while (i < lines.length) {
    let line = lines[i];

    // ---- Heading ----
    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      const [, hashes, text] = headingMatch;
      blocks.push({
        type: "heading",
        style: `h${hashes.length}`,
        text,
      });
      i++;
      continue;
    }

    // ---- Code block ----
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      i++;
      const codeLines: string[] = [];
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      blocks.push({
        type: "code",
        lang,
        text: codeLines.join("\n"),
      });
      continue;
    }

    // ---- Lists ----
    const unorderedMatch = line.match(/^\s*[-*]\s+(.*)$/);
    const orderedMatch = line.match(/^\s*(\d+)\.\s+(.*)$/);
    if (unorderedMatch) {
      blocks.push({
        type: "list",
        style: "bullet",
        children: [{ type: "span", text: unorderedMatch[1] }],
      });
      i++;
      continue;
    }
    if (orderedMatch) {
      blocks.push({
        type: "list",
        style: "number",
        number: orderedMatch[1],
        children: [{ type: "span", text: orderedMatch[2] }],
      });
      i++;
      continue;
    }

    // ---- Paragraph with bold/italic/link inline parsing ----
    if (line.trim() !== "") {
      let text = line;

      // basic bold
      const boldRegex = /\*\*(.+?)\*\*/g;
      const italicRegex = /\*(.+?)\*/g;
      const linkRegex = /\[(.+?)\]\((.+?)\)/g;

      const children: JsonBlock[] = [];

      let remaining = text;
      let match;
      const patterns = [
        { regex: boldRegex, type: "bold" },
        { regex: italicRegex, type: "italic" },
        { regex: linkRegex, type: "link" },
      ];

      let index = 0;
      while (remaining.length > 0) {
        let firstMatch: RegExpExecArray | null = null;
        let matchedPattern: (typeof patterns)[0] | null = null;

        for (const pattern of patterns) {
          pattern.regex.lastIndex = 0;
          const m = pattern.regex.exec(remaining);
          if (m && (!firstMatch || m.index < firstMatch.index)) {
            firstMatch = m;
            matchedPattern = pattern;
          }
        }

        if (firstMatch && matchedPattern) {
          const preText = remaining.slice(0, firstMatch.index);
          if (preText) children.push({ type: "span", text: preText });

          if (matchedPattern.type === "link") {
            children.push({
              type: "link",
              text: firstMatch[1],
              href: firstMatch[2],
            });
          } else {
            children.push({
              type: "span",
              text: firstMatch[1],
              marks: [matchedPattern.type as "bold" | "italic"],
            });
          }

          remaining = remaining.slice(firstMatch.index + firstMatch[0].length);
        } else {
          children.push({ type: "span", text: remaining });
          remaining = "";
        }
      }

      blocks.push({ type: "paragraph", children });
      i++;
      continue;
    }

    i++; // empty line or unhandled
  }

  return blocks;
}
