<template>
  <!---------------------------->
  <!--Main container-->
  <!---------------------------->
  <div class="flex justify-content-center">
    <div
      class="overflow-auto flex flex-column m-4 border-round shadow-5"
      style="height: 50vh; width: 500px"
    >
      <!---------------------------->
      <!--Messages container-->
      <!---------------------------->
      <div id="messages-container" class="h-full overflow-auto p-3">
        <div
          v-for="(message, index) in messages"
          :key="`message-${index}-${message.content}`"
          class="mb-2"
        >
          <template v-if="message.role === 'assistant'">
            <div class="flex align-items-center justify-content-start">
              <div
                class="border-round-xl bg-white-alpha-20 px-3 py-2 max-w-20rem"
              >
                <div class="text-color">{{ message.content }}</div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="flex align-items-center justify-content-end">
              <div
                class="border-round-xl bg-black-alpha-20 px-3 py-2 max-w-20rem"
              >
                <div class="text-colorl">{{ message.content }}</div>
              </div>
            </div>
          </template>
        </div>
        <div v-if="status === 1">
          <div class="flex align-items-center justify-content-start">
            <div
              class="border-round-xl bg-white-alpha-20 px-3 py-2 max-w-20rem"
            >
              <div class="text-color">{{ messageAssistant.content }}</div>
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
const { data } = await useAsyncData("home", () =>
  queryContent("/en/portfolio").findOne()
);

console.log(data);
const { messages, messageAssistant, status, execGpt, systemMessage } =
  useChatGpt({
    apiKey: OPENAI_API_KEY,
  });

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
