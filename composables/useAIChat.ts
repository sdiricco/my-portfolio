import { ref } from "vue";

interface IAIChatResponse{
    messageAssistant: Ref<IMessage>,
    messages: Ref<IMessage[]>,
    status: Ref<number>,
    systemMessage: Ref<IMessage>,
    execChat: (input: string) => Promise<void>,
}

export interface IMessage{
    role: string;
    content: string
  }

const JSONClone = (obj:any) => JSON.parse(JSON.stringify(obj)); 

let huggingFaceToken: string | undefined = undefined;

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


export async function execChat(input: string){
    status.value = 1;
    messageAssistant.value.content = "";
    messages.value.push({
      role: "user",
      content: input,
    });
    
    if (!huggingFaceToken) {
      console.error("Hugging Face token non configurato");
      status.value = 0;
      return;
    }

    // Lista di modelli da provare in ordine di preferenza (usando il nuovo sistema Inference Providers)
    const modelsToTry = [
      "openai/gpt-oss-20b",
      "meta-llama/Llama-3.2-3B-Instruct", 
      "microsoft/DialoGPT-small"
    ];

    // Prepara i messaggi per l'API chat completions (formato OpenAI-compatible)
    const messagesForAPI = [
      {
        role: "system",
        content: systemMessage.value.content
      },
      // Ultimi 5 messaggi per contesto
      ...messages.value.slice(-6).map((msg: IMessage) => ({
        role: msg.role,
        content: msg.content
      }))
    ];

    for (const model of modelsToTry) {
      try {
        console.log(`Tentativo con il modello: ${model}`);
        
        const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${huggingFaceToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: model,
            messages: messagesForAPI,
            temperature: 0.7,
            stream: false
          })
        });

        // Controlla se la risposta è ok
        if (!response.ok) {
          const errorText = await response.text();
          console.warn(`Modello ${model} fallito: ${response.status} - ${errorText}`);
          continue; // Prova il prossimo modello
        }

        // Prova a parsare come JSON
        let result;
        const responseText = await response.text();
        try {
          result = JSON.parse(responseText);
        } catch (parseError) {
          console.warn(`Modello ${model} - JSON non valido:`, responseText);
          continue; // Prova il prossimo modello
        }

        console.log(`Risposta da ${model}:`, result);
        
        let output = '';
        if (result && result.choices && result.choices[0] && result.choices[0].message) {
          output = result.choices[0].message.content.trim();
        } else if (result.error) {
          console.warn(`Errore dal modello ${model}:`, result.error);
          continue; // Prova il prossimo modello
        } else {
          console.warn(`Risposta non valida da ${model}:`, result);
          continue; // Prova il prossimo modello
        }
        
        // Se arriviamo qui, abbiamo una risposta valida
        messageAssistant.value.content = output;
        messages.value.push({
          role: "assistant",
          content: output,
        });
        status.value = 0;
        return; // Successo! Esci dalla funzione

      } catch (error) {
        console.warn(`Errore con il modello ${model}:`, error);
        continue; // Prova il prossimo modello
      }
    }

    // Se arriviamo qui, tutti i modelli sono falliti
    const errorMessage = "Tutti i modelli AI sono attualmente non disponibili. Riprova più tardi.";
    messageAssistant.value.content = errorMessage;
    messages.value.push({
      role: "assistant",
      content: errorMessage,
    });
    status.value = 0;
  }

  function initializeHuggingFace({apiKey}: {apiKey?: string}){
    huggingFaceToken = apiKey;
  }
  

export function useAIChat({apiKey}: {apiKey?: string}): IAIChatResponse {
  initializeHuggingFace({apiKey});
  return {
    messageAssistant,
    messages,
    status,
    systemMessage,
    execChat,
  };
}


