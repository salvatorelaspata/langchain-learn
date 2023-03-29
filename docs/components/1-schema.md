## Schema

**Text**

Il linguaggio naturale per le interazioni con i LLMs è il testo.

**Chat Message**

[ChatMessage](https://js.langchain.com/docs/modules/schema/chat-messages)

Come i testi, ma specifici con attori e contesti.

- System - Aiuta, in background, a contestualizzare il messaggio.
  `new SystemChatMessage("You are a nice assistant");`
- Human - L'utente che interagisce con il sistema.
  `new HumanChatMessage("I am a nice assistant");`
- AI - Risposta generata dall'AI.
  `new AIChatMessage("You are a nice assistant");`

**Documents**

[Documents](https://js.langchain.com/docs/modules/schema/document)

Un documento è un'astrazione per rappresentare il contenuto testuale di un file e i suoi metadati.

```typescript
interface Document {
  pageContent: string
  metadata: Record<string, any>
}
```

Per creare un documento:

```typescript
import { Document } from 'langchain/document'

const doc = new Document({ pageContent: 'foo' })
const docWithMetadata = new Document({
  pageContent: 'foo',
  metadata: { source: '1' },
})
```

E' comunque possibile caricare un documento da un file:

[Document Loader](https://js.langchain.com/docs/modules/indexes/document_loaders/)
