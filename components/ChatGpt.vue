<template>
  <!---------------------------->
  <!--Main container-->
  <!---------------------------->
  <div class="flex justify-content-center">
    <div
      class="overflow-auto flex flex-column m-4 border-round shadow-5"
      style="height: 50vh; width: 1200px"
    >
      <!---------------------------->
      <!--Messages container-->
      <!---------------------------->
      <div id="messages-container" class="h-full overflow-auto p-3">
        <div
          v-for="(message, index) in messagesHtml"
          :key="`message-${index}-${message.id}`"
          class="mb-4"
        >
          <template v-if="message.role === 'assistant'">
            <div class="flex">
              <div class="px-3 py-2 w-full">
                <div class="flex gap-2">
                  <div class="avatar">
                    <Icon
                      name="carbon:user-avatar-filled"
                      :style="{ 'font-size': '2rem', color: '#a1f7b9' }"
                    />
                  </div>
                  <div class="w-full">
                    <div class="font-bold my-1 ">Assistant</div>
                    <div class="text-color w-full" v-html="message.html"></div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="flex">
              <div class="px-3 py-2 w-full">
                <div class="flex gap-2 w-full">
                  <div class="avatar">
                    <Icon
                      name="carbon:user-avatar-filled"
                      :style="{ 'font-size': '2rem',  }"
                    />
                  </div>
                  <div class="w-full flex flex-column">
                    <div class="font-bold my-1">Tu</div>
                    <div class="text-color w-full" v-html="message.html"></div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div v-if="status === 1">
          <div class="flex">
            <div class="px-3 py-2 w-full">
              <div class="flex gap-2 w-full">
                  <div class="avatar">
                    <Icon
                      name="carbon:user-avatar-filled"
                      :style="{ 'font-size': '2rem', color: '#a1f7b9' }"
                    />
                  </div>
                  <div class="w-full">
                    <div class="font-bold my-1">Assistant</div>
                    <div class="text-color w-full" v-html="messageAssistantHtml.html"></div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-top-1 surface-border flex align-items-end px-3 py-2">
        <InputGroup>
          <InputText v-model="inputString" class="w-full" />
          <Button @click="sendMessageToChatGpt" icon="pi pi-send"></Button>
        </InputGroup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { capitalize } from "lodash";
import { OPENAI_API_KEY } from "@/constants";
import { Marked } from "marked";
import type { MarkedOptions } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

// Estendi l'interfaccia MarkedOptions per includere la proprietà 'highlight'
interface CustomMarkedOptions extends MarkedOptions {
  highlight: (code: string, lang: string) => string;
}

// Configura marked con le opzioni personalizzate
const marked = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);

const { data } = await useAsyncData("home", () =>
  queryContent("/en/portfolio").findOne()
);

console.log(data);
const { messages, messageAssistant, status, execGpt, systemMessage } =
  useChatGpt({
    apiKey: OPENAI_API_KEY,
  });

const messagesHtml = computed(() =>
  messages.value.map((message) => ({
    role: message.role,
    id: Math.random().toString(),
    html: marked.parse(message.content),
  }))
);

const messageAssistantHtml = computed(() => ({
  role: messageAssistant.value.role,
  id: Math.random().toString(),
  html: marked.parse(messageAssistant.value.content),
}));

const cv = JSON.stringify(data.value?.body?.children);

systemMessage.value = {
  role: "system",
  content: `Sei un assistente di un candidato che ha il seguente curriculum parsato in markdown ${cv}. Rispondi ai recruiter.`,
};

const scrollToBottom = async () => {
  await nextTick();
  const textArea: any = document.getElementById("messages-container");
  textArea.scrollTop = textArea.scrollHeight;
};

watch(() => messages.value.length, scrollToBottom, { deep: true });
watch(messageAssistant, scrollToBottom, { deep: true });

const inputString = ref("");
async function sendMessageToChatGpt() {
  execGpt(inputString.value);
}

onMounted(() => {
  scrollToBottom();
});
</script>

<style>
/*

Atom One Dark by Daniel Gamage
Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax

base:    #282c34
mono-1:  #abb2bf
mono-2:  #818896
mono-3:  #5c6370
hue-1:   #56b6c2
hue-2:   #61aeee
hue-3:   #c678dd
hue-4:   #98c379
hue-5:   #e06c75
hue-5-2: #be5046
hue-6:   #d19a66
hue-6-2: #e6c07b

*/

/* Stile per il blocco di codice pre contenente un tag code con classe hljs */
pre:has(code.hljs) {
  /* Aggiungi qui i tuoi stili personalizzati */
  background: #282c34;
  padding: 8px;
  overflow: auto;
  border-radius: 4px;
  border: 1px solid #333;
}

.hljs {
  color: #abb2bf;
  background: #282c34;
}

.hljs-comment,
.hljs-quote {
  color: #5c6370;
  font-style: italic;
}

.hljs-doctag,
.hljs-keyword,
.hljs-formula {
  color: #c678dd;
}

.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: #e06c75;
}

.hljs-literal {
  color: #56b6c2;
}

.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta .hljs-string {
  color: #98c379;
}

.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number {
  color: #d19a66;
}

.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title {
  color: #61aeee;
}

.hljs-built_in,
.hljs-title.class_,
.hljs-class .hljs-title {
  color: #e6c07b;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-link {
  text-decoration: underline;
}
</style>
