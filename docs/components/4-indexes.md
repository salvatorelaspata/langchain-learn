# Indexes

L'indicizzazione serve a strutturare i documenti così che possano essere interpretati correttamente da un LLM.
E' il modo più semplice per includere dati in un LLM.

## Document Loaders

[Document Loaders](https://js.langchain.com/docs/modules/indexes/document_loaders/)

Esistono svariati Document Loader per caricare la maggior parte dei documenti.
La Classe DocumentLoader ha la seguente interfaccia:

```typescript
class DocumentLoader {
  load(): Promise<Document[]>
  loadAndSplit(textSplitter?: TextSplitter): Promise<Document[]>
}
```

Il metodo `load` carica i documenti e li restituisce in un array.
Il metodo `loadAndSplit` carica i documenti e li divide in base al `TextSplitter` specificato.

### Web Loader

```javascript
import { HNLoader } from 'langchain/document_loaders'

const loader = new HNLoader('https://news.ycombinator.com/item?id=34817881')

const docs = await loader.load()
```

### File Loader

```javascript
import { TextLoader } from 'langchain/document_loaders'

const loader = new TextLoader('src/document_loaders/example_data/example.txt')

const docs = await loader.load()
```

## Text Splitters

[Text Splitters](https://js.langchain.com/docs/modules/indexes/text_splitters/)

Probabilmente i documenti che si intende caricare nel LLM sono molto grandi e non di facile interpretazione dal LLM.
Risulta quindi necessario suddividere i documento in parti chiamati "chunks". Questo processo è chiamato "splitting" e langchain fornisce un'interfaccia per definire come dividere i documenti.

```typescript
interface TextSplitter {
  chunkSize: number

  chunkOverlap: number

  createDocuments(
    texts: string[],
    metadatas?: Record<string, any>[]
  ): Promise<Document[]>

  splitDocuments(documents: Document[]): Promise<Document[]>
}
```

vengono esposti i metodi `createDocuments` e `splitDocuments` che sono utilizzati per dividere i documenti.

I Text Splitters utilizzati per dividere i documenti sono:

- CharacterTextSplitter
- MarkdownTextSplitter
- RecursiveCharacterTextSplitter
- TokenTextSplitter

Es CharacterTextSplitter:

```javascript
import { Document } from 'langchain/document'
import { CharacterTextSplitter } from 'langchain/text_splitter'

const text = 'foo bar baz 123'
const splitter = new CharacterTextSplitter({
  separator: ' ',
  chunkSize: 7,
  chunkOverlap: 3,
})
const output = await splitter.createDocuments([text])
console.log(output)
```

## Retrievers

Un modo per archiviare i dati in modo che possano essere interrogati da un modello di linguaggio.

- ChatGPT Plugin Retriever
- Remote Retriever
- VectorStore

## VectorStore

Database per archiviare i vettori di embedding. I più popolari sono Pinecone & Weaviate & Supabase.
Sostanzialmente è un database che permette di archiviare i vettori di embedding e di interrogarli.

- [Pinecone](https://docs.pinecone.io/)
- [Weaviate](https://www.semi.technology/developers/weaviate/current/index.html)
- [Supabase](https://js.langchain.com/docs/modules/indexes/vector_stores/integrations/supabase)
