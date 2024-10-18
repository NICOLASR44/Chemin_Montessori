// Utils
import DOMPurify from "dompurify";
import { marked } from "marked";

export const mdToHTML = (content) => {
  const result = marked.parse(content);
  return DOMPurify.sanitize(result);
};

const parseContent = (content) => {
  const truncated = content.slice(0, 250) + (content.length > 250 ? "..." : "");
  const result = marked.parse(truncated);
  return DOMPurify.sanitize(result);
};

export default parseContent;
