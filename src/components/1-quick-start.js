// LLMs: ottieni previsioni da un modello linguistico
import { openai } from './instances/openai.js'
import { readlineCli } from './instances/readlineCli.js'
// Carica le variabili d'ambiente

// Crea un'istanza di OpenAI
// const model = new OpenAI({
//   openAIApiKey: process.env.OPEN_AI_API_KEY,
//   temperature: 0.9,
// })
const model = openai({ temperature: 0.9 })

// Chiamata alla funzione
// const res = await model.call('Chi ha inventato la scatola di pandora e perché?')
readlineCli.question('Inserisci il prompt:', prompt => {
  model.call(prompt).then(res => {
    console.log(res)
    readlineCli.close()
  })
})
