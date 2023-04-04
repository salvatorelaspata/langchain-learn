# Agents

Alcune applicazioni richiedono non solo una catena predeterminata di chiamate a LLM/altri strumenti, ma potenzialmente una catena sconosciuta che dipende dall'input dell'utente.
In questi tipi di catene c'è un "agente" che ha accesso a una suite di strumenti. A seconda dell'input dell'utente, l'agente può quindi decidere quale di questi strumenti chiamare, se del caso.

Esistono diverse astrazioni nel framework:

- Tools
- Agents
- Toolkits
- Agent Executor

## Tools

Viene utilizzata quando la necessità è di fornire da un singolo input un singolo output.
Il Tool ha la seguente struttura:

```typescript
interface Tool {
  call(arg: string): Promise<string>

  name: string

  description: string
}
```

[All Tools](https://js.langchain.com/docs/modules/agents/tools/#all-tools)

Un esempio è DynamicTool che accetta in input un nome, una descrizione e una funzione.
**È importante sottolineare che il nome e la descrizione verranno utilizzati dal modello linguistico per determinare quando chiamare questa funzione e con quali parametri!**
Quando si verifica un errore, la funzione dovrebbe, quando possibile, restituire una stringa che rappresenta un errore, anziché generare un errore. Ciò consente di passare l'errore all'LLM e l'LLM può decidere come gestirlo.

```typescript
import { OpenAI } from 'langchain'
import { initializeAgentExecutor } from 'langchain/agents'
import { DynamicTool } from 'langchain/tools'

export const run = async () => {
  const model = new OpenAI({ temperature: 0 })
  const tools = [
    new DynamicTool({
      name: 'FOO',
      description:
        'call this to get the value of foo. input should be an empty string.',
      func: () => 'baz',
    }),
    new DynamicTool({
      name: 'BAR',
      description:
        'call this to get the value of bar. input should be an empty string.',
      func: () => 'baz1',
    }),
  ]

  const executor = await initializeAgentExecutor(
    tools,
    model,
    'zero-shot-react-description'
  )

  console.log('Loaded agent.')

  const input = `What is the value of foo?`

  console.log(`Executing with input "${input}"...`)

  const result = await executor.call({ input })

  console.log(`Got output ${result.output}`)
}
```

## Toolkit

Gruppi di strumenti che possono essere utilizzati per risolvere un determinato problema
Un Toolkit ha la seguente struttura:

```typescript
interface Toolkit {
  tools: Tool[]
}
```

[All Toolkits](https://js.langchain.com/docs/modules/agents/toolkits/#all-toolkits)

- JSON Agent Toolkit
- OpenAPI Agent Toolkit
- SQL Agent Toolkit
- VectorStore Agent Toolkit

## Agent

[Doc](https://js.langchain.com/docs/modules/agents/agents/)

Un agente è un wrapper attorno a un modello, che riceve l'input dall'utente e restituisce come risposta un'azione da eseguire.

```typescript
interface AgentStep {
  action: AgentAction
  observation: string
}

interface AgentAction {
  tool: string // Tool.name
  toolInput: string // Tool.call argument
}

interface AgentFinish {
  returnValues: object
}

class Agent {
  plan(steps: AgentStep[], inputs: object): Promise<AgentAction | AgentFinish>
}
```

Alcuni casi d'uso:

- Se stai usando un testo LLM, prova prima zero-shot-react-description, aka. [l'agente MRKL per LLM](https://js.langchain.com/docs/modules/agents/agents/examples/llm_mrkl).
- Se stai usando un modello di chat, prova chat-zero-shot-react-description, aka. [l'agente MRKL per i modelli di chat](https://js.langchain.com/docs/modules/agents/agents/examples/chat_mrkl).
- Se si utilizza un modello di chat e si desidera utilizzare la memoria, provare chat-conversational-react-description, [l'agente conversazionale](https://js.langchain.com/docs/modules/agents/agents/examples/conversational_agent).

## Agent Executor

Un esecutore di agenti è un agente e un insieme di strumenti. L'esecutore dell'agente è responsabile della chiamata dell'agente, del recupero dell'azione e dell'input dell'azione, della chiamata dello strumento a cui fa riferimento l'azione con l'input corrispondente, dell'ottenimento dell'output dello strumento e quindi del passaggio di tutte le informazioni all'agente per ottenere l'azione successiva da intraprendere

Per inizializzare un esecutore di agenti, è necessario fornire:

- Un insieme di strumenti (Toolkit)
- Un modello (LLM o modello di chat)
- Agente (l'agente da utilizzare)

Un esempio potrebbe essere di andare ad interrogare un API ad alto livello.

```typescript
import { OpenAI } from 'langchain'
import { initializeAgentExecutor } from 'langchain/agents'
import { SerpAPI, Calculator } from 'langchain/tools'

const model = new OpenAI({ temperature: 0 })
const tools = [new SerpAPI(), new Calculator()]

const executor = await initializeAgentExecutor(
  tools,
  model,
  'zero-shot-react-description'
)
console.log('Loaded agent.')

const input =
  "Who is Olivia Wilde's boyfriend?" +
  ' What is his current age raised to the 0.23 power?'
console.log(`Executing with input "${input}"...`)

const result = await executor.call({ input })

console.log(`Got output ${result.output}`)
```

> E' necessario configurare le API key per SerpAPI (SERPAPI_API_KEY="...")
