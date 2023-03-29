# langchain

[JS Doc](https://js.langchain.com/docs/)
[Python Doc](https://python.langchain.com/en/latest/)

## inspirazione

langchain è un generatore di catene di linguaggio semplice. È scritto in Rust e utilizza l'algoritmo [catena di Markov](https://it.wikipedia.org/wiki/Catena_di_Markov) per generare nuove frasi.

## Come funziona

langchain legge un file di testo e crea una catena di Markov. Una volta che la catena è stata creata, langchain può generare nuove frasi utilizzando la catena.

## Qualche esempio

langchain può essere utilizzato per generare frasi in stile di un autore.
Per esempio, langchain può essere utilizzato per generare frasi in stile di Shakespeare. Per fare questo, langchain legge il testo di Shakespeare e crea una catena di Markov. Una volta che la catena è stata creata, langchain può generare nuove frasi in stile di Shakespeare utilizzando la catena.

# Come usare langchain

Come prima cosa è necessario scegliere quale linguaggio di programmazione utilizzare. Langchain è disponibile in [Rust](https://www.rust-lang.org/), [Python](https://www.python.org/) e [JavaScript](https://www.javascript.com/).

Ci concentreremo su JavaScript, ma il processo è simile per Python e Rust.

## Installazione

Per installare langchain in JavaScript, è necessario utilizzare npm:

```bash
npm install langchain
```

Per installare langchain in Python, è necessario utilizzare pip:

```bash
pip install langchain
```

## /src/1-quick-start.js

[src/1-quick-start.js](src/1-quick-start.js)

Questo esempio mostra come utilizzare langchain in JavaScript.

## /src/2-prompt-templates.js

[src/2-prompt-templates.js](src/2-prompt-templates.js)

Questo esempio mostra l'implementazione del Prompt Templates.

## /src/3-chain.js

[src/3-chain.js](src/3-chain.js)

Questo esempio esplica la combinazione tra Prompt Templates e LMMChain.

## /src/4-agents.js

[src/4-agents.js](src/4-agents.js)

Questo esempio mostra come utilizzare gli agenti per generare nuove frasi. In particolare viene creato un agent che, oltre ad utilizzare OpenAI, utilizza i tools Serp e Calculator.

## /src/5-memory.js

[src/5-memory.js](src/5-memory.js)

Questo esempio mostra come utilizzare la memoria per generare nuove frasi.

## /src/6-streaming.js

[src/6-streaming.js](src/6-streaming.js)

Implementazione streaming di langchain OpenAI.

## /src/7-chat-models.js

[src/7-chat-models.js](src/7-chat-models.js)

Explore Chat Models. In particolare, viene utilizzato il modello di chat GPT-3.5-turbo.
Vengono anche utilizzati langchain/schema per definire gli attori della chat.

## /src/8-embeddings.js

[src/8-embeddings.js](src/8-embeddings.js)

Rappresentazione delle frasi in spazio vettoriale. In particolare, viene utilizzato il modello di embedding di OpenAI.

## /src/9-llms.js

[src/9-llms.js](src/9-llms.js)

Langchain Language Models. Esempio.
