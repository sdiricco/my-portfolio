<template>
  <pre class="container" v-html="formattedValue"></pre>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  value: Object | null | undefined;
}>();

const keyRegEx = /^"/;
const stringRegEx = /:$/;
const booleanRegEx = /true|false/;
const nullRegEx = /null/;
const punctuationRegEx = /[\{\}\[\]:]/;

const syntaxHighlight = (json: string): string => {
  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?|\{|\}|\[|\]|:)/g,
    (match) => {
      let cls = "number";

      if (keyRegEx.test(match)) {
        if (stringRegEx.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (booleanRegEx.test(match)) {
        cls = "boolean";
      } else if (nullRegEx.test(match)) {
        cls = "null";
      } else if (punctuationRegEx.test(match)) {
        cls = "punctuation";
      }

      return `<span class="${cls}">${match}</span>`;
    }
  );
};

const formattedValue = computed(() => {
  if (typeof props.value === "object") {
    const json = JSON.stringify(props.value, null, 2);
    const lines = syntaxHighlight(json).split("\n");

    return lines
      .map((line, index) => {
        const lineNumber = index + 1;
        return `<span class="line-number">${lineNumber}</span>${line}`;
      })
      .join("\n");
  }
});
</script>

<style scoped>
pre {
  border: 1px solid #ccc;
  padding: 10px;
  overflow-x: auto;
  font-size: 0.85rem;
  font-weight: 500;
  /* line-height: 1.2; */
}

.container :deep(.line-number) {
  display: inline-block;
  width: 3em;
  text-align: right;
  margin-right: 4px;
  color: #666;
  border-right: 1px solid #ccc;
  padding-right: 4px;
  box-sizing: border-box;
  user-select: none;
}

.container :deep(.key) {
  color: #5c65c0;
}

.container :deep(.string) {
  color: #429867;
}

.container :deep(.number) {
  color: #de8531;
}

.container :deep(.boolean) {
  color: #e02130;
}

.container :deep(.null) {
  color: #3a415a;
}

.container :deep(.punctuation) {
  color: #575e55;
}
</style>
