<template>
  <!-- <div class="flex flex-column gap-2 w-20rem">
    <Textarea v-model:model-value="inputString"></Textarea>
    <Button @click="main">Send</Button>
    <div v-for="message in messages" :key="message.content">{{ message }}</div>
  </div> -->
  <!---------------------------->
  <!--Main container-->
  <!---------------------------->
  <div class="overflow-auto flex flex-column border-1 m-4" style="height: 50vh">
    <!---------------------------->
    <!--Messages container-->
    <!---------------------------->
    <div id="messages-container" class="h-full overflow-auto p-3">
      <div
        v-for="(message, index) in messages"
        :key="`message-${index}-${message.content}`"
        class="mb-4"
      >
        <div class="text-xl text-primary font-bold">
          {{ capitalize(message.role) }}
        </div>
        <div class="text-color text-xl">{{ message.content }}</div>
      </div>
      <div v-if="status === 1">
        <div class="text-xl text-primary font-bold">
          {{ capitalize(messageAssistant.role) }}
        </div>
        <div
          class="text-xl text-color"
        >{{ messageAssistant.content }}</div>
      </div>
    </div>
    <div class="flex align-items-end p-2 m-3 border-round-3xl">
      <Textarea
        v-model="inputString"
        autoResize
        rows="1"
        cols="2"
        class="custom-textarea w-full border-round-3xl text-xl"
        style="background: transparent"
      />
      <div class="cursor-pointer m-2 mx-4" @click="sendMessageToChatGpt">
        <i class="pi pi-send text-primary text-2xl"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { capitalize } from "lodash";
import { OPENAI_API_KEY } from "@/constants";
const { messages, messageAssistant, status, execGpt } = useChatGpt({
  apiKey: OPENAI_API_KEY,
});

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
