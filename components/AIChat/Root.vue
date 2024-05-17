<template>
  <div class="h-full flex flex-column">
    <div id="messages-container" class="flex flex-1 overflow-auto justify-content-center">
      <!---------------------------->
      <!--Messages container-->
      <!---------------------------->
      <div class="h-full pt-4" style="padding-bottom: 90px;width: 980px;">
        <template v-if="messagesHtml.length">
          <div v-for="(message, index) in messagesHtml" :key="`message-${index}-${message.id}`" class="mb-5">
            <AIChatMessage :icon="getIcon(message.role)" :role="getRoleName(message.role)" :value="message.html"
              :background-icon="getBackgroundIcon(message.role)" :color-icon="getColorIcon(message.role)" />
          </div>
          <div v-if="status === 1">
            <AIChatMessage :icon="getIcon(messageAssistantHtml.role)" role="assistant"
              :value="messageAssistantHtml.html" :background-icon="getBackgroundIcon(messageAssistantHtml.role)"
              :color-icon="getColorIcon(messageAssistantHtml.role)" />
          </div>
        </template>
        <template v-else>
          <AIChatEmpty @select="onSelectHint"/>
        </template>

      </div>
    </div>
    <div class="p-4 flex justify-content-center">
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


function getIcon(role: string) {
  switch (role) {
    case 'assistant':
      return 'hugeicons:ai-network'
    case 'user':
      return 'ph:user-bold'
    default:
      return 'ph:user-bold'
  }
}

function getRoleName(role: string) {
  return {
    'assistant': 'AI',
    'user': 'Tu'
  }[role] || ''
}

function getColorIcon(role: string) {
  return {
    'assistant': 'white',
    'user': 'black'
  }[role] || ''
}

function getBackgroundIcon(role: string) {
  return {
    'assistant': 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)',
    'user': 'white'
  }[role] || ''
}



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
  content: `Sei un assistente di un candidato che ha il seguente curriculum parsato in markdown ${cv}. Rispondi ai recruiter enfatizzando in markdown. Ti rivolgerai sempre a un recruiter. Non iniziare MAI un messaggio con un carattere <a capo>`,
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

function onSelectHint(message:string){
  execGpt(message);
}

onMounted(() => {
  scrollToBottom();
});
</script>