import { embeddingsai } from './instances/openai.js'

const embeddings = embeddingsai()

const res = await embeddings.embedQuery('hello world')
console.log(res)
/* Embed documents */
const documentRes = await embeddings.embedDocuments(['Hello world', 'Bye bye'])
console.log(documentRes)

/*
Embeddings can be used to create a numerical representation of textual data. 
This numerical representation is useful because it can be used to find similar documents.
*/
