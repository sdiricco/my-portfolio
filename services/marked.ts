import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";


// Configura marked con le opzioni personalizzate
export const marked = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);
