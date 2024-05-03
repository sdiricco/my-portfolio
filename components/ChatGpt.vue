<template>
  <div class="flex flex-column gap-2 w-20rem">
    <Textarea v-model:model-value="inputString"></Textarea>
    <Button @click="main">Send</Button>
    <div v-for="message in messages" :key="message.content">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
import {OPENAI_API_KEY} from "@/constants"
const { messages, execGpt, initialize } = useChatGpt();
const messageContents = computed(() =>
  messages.value.map((message) => message.content)
);

const inputString = ref("");
async function main() {
  execGpt(inputString.value);
}

onMounted(()=> {
  initialize({apiKey: OPENAI_API_KEY})
})
</script>
