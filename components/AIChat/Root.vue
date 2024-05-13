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
          <AIChatMessage icon="carbon:user-avatar-filled" :role="message.role" :value="message.html"/>
        </div>
        <div v-if="status === 1">
          <AIChatMessage icon="carbon:user-avatar-filled" role="assistant" :value="messageAssistantHtml.html"/>
        </div>
      </div>
      <div class="border-top-1 surface-border flex align-items-end px-3 py-2">
        <AIChatInput @send="sendMessageToChatGpt" v-model:value="inputString"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { OPENAI_API_KEY } from "@/constants";
import { marked } from "~/services/marked";

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
  inputString.value = '';
}

onMounted(() => {
  scrollToBottom();
});
</script>

