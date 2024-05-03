import OpenAI from "openai";
import { ref } from "vue";

interface IGPTResponse{
    messageAssistant: Ref<IMessage>,
    messages: Ref<IMessage[]>,
    status: Ref<number>,
    systemMessage: Ref<IMessage>,
    execGpt: (input: string) => Promise<void>,
    initialize: ({apiKey}: {apiKey?: string}) => void
}

export interface IMessage{
    role: string;
    content: string
  }

const JSONClone = (obj:any) => JSON.parse(JSON.stringify(obj)); 

let openAi: OpenAI | undefined = undefined;

const status = ref(0);

const systemMessage = ref({
  role: "system",
  content: `Fornisci una risposta in modo da rendere il testo leggibile.`,
})

const messages = ref<any>([]);

const messageAssistant = ref({
  role: "assistant",
  content: ''
});


export async function execGpt(input: string){
    status.value = 1;
    messageAssistant.value.content = "";
    messages.value.push({
      role: "user",
      content: input,
    });
    const messagesClone = JSONClone(messages.value)
    messagesClone.unshift(systemMessage.value)
    if (!openAi) {
      return;
    }
    const stream = await openAi.chat.completions.create({
      messages: messagesClone,
      model: "gpt-3.5-turbo",
      stream: true,
    });
    let output = '';
    for await (const part of stream) {
      const content = part.choices[0]?.delta?.content?.toString();
      if (content) {
        output += content;
        messageAssistant.value.content = output;
      }
    }
    messages.value.push({
      role: "assistant",
      content: output,
    });
    status.value = 0;
  
  }

  export function initialize({apiKey}: {apiKey?: string}){
    openAi = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true,
    });
  }
  

export function useChatGpt(): IGPTResponse {
  return {
    messageAssistant,
    messages,
    status,
    systemMessage,
    execGpt,
    initialize
  };
}


