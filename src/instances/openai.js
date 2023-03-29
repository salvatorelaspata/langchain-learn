import { OpenAI } from 'langchain/llms'
import { ChatOpenAI } from 'langchain/chat_models'
import { OpenAIEmbeddings } from 'langchain/embeddings'

import { default as dotenv } from 'dotenv'
dotenv.config()

export const openai = opt =>
  new OpenAI({
    openAIApiKey: process.env.OPEN_AI_API_KEY,
    ...opt,
  })

export const chatopenai = opt =>
  new ChatOpenAI({
    openAIApiKey: process.env.OPEN_AI_API_KEY,
    ...opt,
  })

export const embeddingsai = opt =>
  new OpenAIEmbeddings({
    openAIApiKey: process.env.OPEN_AI_API_KEY,
    ...opt,
  })
