<template>
  <div class="h-full flex flex-column">
    <div id="messages-container" class="flex flex-1 overflow-auto justify-content-center">
      <!---------------------------->
      <!--Messages container-->
      <!---------------------------->
      <div class="h-full px-3" style="padding-bottom: 90px;width: 980px;" >
        <div v-for="(message, index) in messagesHtml" :key="`message-${index}-${message.id}`" class="mb-4">
          <AIChatMessage icon="carbon:user-avatar-filled" :role="message.role" :value="message.html" />
        </div>
        <div v-if="status === 1">
          <AIChatMessage icon="carbon:user-avatar-filled" role="assistant" :value="messageAssistantHtml.html" />
        </div>
      </div>
    </div>
    <div class="p-4 flex justify-content-center" >
      <AIChatInput @send="sendMessageToChatGpt" v-model:value="inputString" style="max-width: 980px;" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { marked } from "~/services/marked";
const config = useRuntimeConfig()
console.log('Runtime config:', config)


const { data } = await useAsyncData("home", () =>
  queryContent("/en/portfolio").findOne()

);

console.log(data);


const { messages, messageAssistant, status, execGpt, systemMessage } =
  useChatGpt({
    apiKey: config.public.openaiApiKey as string,
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
  content: `Sei un assistente di un candidato che ha il seguente curriculum parsato in markdown ${cv}. Rispondi ai recruiter enfatizzando in markdown.`,
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
  inputString.value = '';
}

onMounted(() => {
  scrollToBottom();
});
</script>