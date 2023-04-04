# Casi d'uso

## Assistente personale

Siamo abituati a chiedere a Siri, Ok Google e Alexa ma non abbiamo ancora un assistente personale che possa aiutarci a soddisfare le nostre necessità. In particolare LangChain permette di creare un'assistente personale che ha evidenza dei proprio dati, è possibile integrarlo con i servizi che vengono utilizzati quotidianamente oltre a ricordarsi le interazioni.

Alcune linee guida per creare un assistente personale:

- [agents](https://js.langchain.com/docs/modules/agents/) (per interagire con il mondo esterno)
- [indexes](https://js.langchain.com/docs/modules/indexes/) (per dare conoscenza dei dati)
- [memory](https://js.langchain.com/docs/modules/memory/) (per ricordare le interazioni)

## Risposta alle domande su Documenti

LangChain può essere utilizzato per rispondere alle domande. Questo è possibile grazie alla possibilità di integrare i dati esterni con i modelli di IA. In particolare è possibile integrare i dati esterni con i modelli di IA (LLMs) e creare agenti che possono interagire con gli utenti e con i modelli di IA nel quale sono contestualizzati.

Esistono diversi tipi di risposta alle domande:

- Recupero domande di risposta: utilizzato per inserire documenti, indicizzarli in un vectorstore e quindi essere in grado di porre domande a riguardo
- Recupero della chat: simile a quello sopra in quanto si acquisiscono e indicizzano documenti, ma questo consente di avere più una conversazione (porre domande di follow-up, ecc.) piuttosto che porre solo domande una tantum.

### Indicizzazione ([indexes](./components/4-indexes.md))

Per rispondere alle domande su molti documenti, si desidera quasi sempre creare un indice sui dati. Questo può essere utilizzato per accedere in modo intelligente ai documenti più rilevanti per una determinata domanda, consentendo di evitare di dover passare tutti i documenti al LLM (risparmiando tempo e denaro).

Pertanto, è davvero importante capire come creare indici, e quindi dovresti familiarizzare con tutta la documentazione relativa a questo.

### Catene ([chains](./components/6-chains.md))

Dopo aver creato un indice, è possibile utilizzarlo in una catena. Puoi semplicemente rispondere alle domande normali su di esso, oppure puoi usarlo in modo colloquiale. Per una panoramica di queste catene (e altro) vedere la documentazione riportata di seguito [doc](https://js.langchain.com/docs/modules/chains/index_related_chains/)

### Agenti ([agents](./components/7-agents.md))

Gli agenti permettono di rispondere a domande complesse e multi per poter combinare gli indici con un agente. Un esempio potrebbe essere [VectorStore Agent](https://js.langchain.com/docs/modules/agents/toolkits/examples/vectorstore)

## Chatbot

ChatGPT ha preso d'assalto il mondo esponendo un potente modello linguistico con una nuova interfaccia: la chat. Ci sono diversi componenti che vanno nella costruzione di un chatbot.

- Il modello: puoi costruire un chatbot da un normale modello linguistico o da un modello di chat. La cosa importante da ricordare è che anche se stai utilizzando un modello di chat, l'API stessa è senza stato, il che significa che non ricorderà le interazioni precedenti: devi passarle.
- PromptTemplate - questo guiderà come agisce il tuo chatbot. Sono impertinente? Servizievole? Questi possono essere usati per dare al tuo chatbot un po 'di carattere.
- Memoria: come accennato in precedenza, i modelli stessi sono senza stato. La memoria porta sul tavolo alcuni concetti di stato, permettendogli di ricordare le interazioni precedenti

I chatbot sono spesso molto potenti e più differenziati se combinati con altre fonti di dati. Le stesse tecniche alla base di "Question Answering Over Docs" possono essere utilizzate anche qui per dare al tuo chatbot l'accesso a tali dati.

## Esecuzione di query su database

Chain:

[SQL Database Chain](https://js.langchain.com/docs/modules/chains/other_chains/sql)

Agent:

[SQL Agent](https://js.langchain.com/docs/modules/agents/toolkits/examples/sql)

## Esecuzione di query su API

Chain:

TODO

Agent:

[Open API Agent](https://js.langchain.com/docs/modules/agents/toolkits/examples/openapi)

## Extras

- Estrazione
- Valutazione
- Riepilogo
