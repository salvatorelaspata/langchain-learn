# Models

I modelli sono il cuore di LangChain. Sono i componenti che trasformano i dati in output.

Ne esistono tre tipi:

- LLMS - LangChain Language Models
- Chat Models
- Text Embedding Models

## LLMS

LLM è un acronimo per LangChain Language Model. Un LLM è un modello che può essere utilizzato per generare testo. Quindi dato un testo in input, un LLM può generare un testo in output.

```typescript
import { OpenAI } from 'langchain/llms'

export const run = async () => {
  const model = new OpenAI()
  // `call` is a simple string-in, string-out method for interacting with the model.
  const resA = await model.call(
    'What would be a good company name a company that makes colorful socks?'
  )
  console.log({ resA })
  // { resA: '\n\nSocktastic Colors' }
}
```

## Chat Models

Questi modelli sono generalmente supportati da un modello linguistico. Nello specifico accettano un elenco di messaggi di chat come input e generano un messaggio di chat come output.

```typescript
import { ChatOpenAI } from 'langchain/chat_models'
import { HumanChatMessage } from 'langchain/schema'

export const run = async () => {
  const chat = new ChatOpenAI()
  // Pass in a list of messages to `call` to start a conversation. In this simple example, we only pass in one message.
  const response = await chat.call([
    new HumanChatMessage(
      'What is a good name for a company that makes colorful socks?'
    ),
  ])
  console.log(response)
  // AIChatMessage { text: '\n\nRainbow Sox Co.' }
}
```

## Text Embedding Models

Un modello di incorporamento del testo prende una parte di testo come input e la rappresentazione numerica di quel testo sotto forma di un elenco di float.

```typescript
import { OpenAIEmbeddings } from 'langchain/embeddings'

/* Create instance */
const embeddings = new OpenAIEmbeddings()

/* Embed queries */
const res = await embeddings.embedQuery('Hello world')
/*
[
   -0.004845875,   0.004899438,  -0.016358767,  -0.024475135, -0.017341806,
  ... 1436 more items
]
*/

/* Embed documents */
const documentRes = await embeddings.embedDocuments(['Hello world', 'Bye bye'])
/*
[
  [
    -0.0047852774,  0.0048640342,   -0.01645707,  -0.024395779, -0.017263541,
    ... 1436 more items
  ],
  [
     -0.009446913,  -0.013253193,   0.013174579,  0.0057552797,  -0.038993083,
    ... 1436 more items
  ]
]
*/
```
