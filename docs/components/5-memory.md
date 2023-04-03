# Memory

Aiuta LLM a ricordare le informazioni.

Questo permette al chatbot di rispondere alle domande che non ha imparato, ad esempio, o rispondere su domande magari già risposte in precedenza.

Un esmpio di utilizzo è come chatbot.

## Chat Message Memory

```javascript
import { OpenAI } from 'langchain/llms'
import { BufferMemory } from 'langchain/memory'
import { ConversationChain } from 'langchain/chains'

const model = new OpenAI({})
const memory = new BufferMemory()
const chain = new ConversationChain({ llm: model, memory: memory })
const res1 = await chain.call({ input: "Hi! I'm Jim." })
console.log({ res1 })
// {response: " Hi Jim! It's nice to meet you. My name is AI. What would you like to talk about?"}

const res2 = await chain.call({ input: "What's my name?" })
console.log({ res2 })
// {response: ' You said your name is Jim. Is there anything else you would like to talk about?'}
```
