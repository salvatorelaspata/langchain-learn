// LLMs: ottieni previsioni da un modello linguistico

import { OpenAI } from 'langchain'
import { default as dotenv } from 'dotenv'

// Carica le variabili d'ambiente
dotenv.config()

// Crea un'istanza di OpenAI
const model = new OpenAI({
  openAIApiKey: process.env.OPEN_AI_API_KEY,
  temperature: 0.9,
})

// Chiamata alla funzione
const res = await model.call('Chi ha inventato la scatola di pandora e perché?')
console.log(res)
