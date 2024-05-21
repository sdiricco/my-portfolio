export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            AIChat: {
                title: 'AI Assistant',
                input: {
                    placeholder: 'Send a message to AI assistant'
                },
                hints: [
                    'What were your main responsibilities in your last job?',
                    'Can you describe a significant project you worked on and your specific role?',
                    'What are your long-term career goals?',
                    'What are your main motivations and what drives you to perform at your best?'
                ]
            }
        },
        it: {
            AIChat: {
                title: 'Assistente AI',
                input: {
                    placeholder: 'Invia un messaggio all\'assistente AI'
                },
                hints: [
                    'Quali erano le tue principali responsabilità nel tuo ultimo lavoro?',
                    'Puoi descrivere un progetto significativo a cui hai lavorato e il tuo ruolo specifico?',
                    'Quali sono i tuoi obiettivi a lungo termine nella tua carriera?',
                    'Quali sono le tue principali motivazioni e cosa ti spinge a dare il meglio?'
                ]
            }
        }
    }
}))