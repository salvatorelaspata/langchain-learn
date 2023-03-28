import { OpenAI } from 'langchain'

import { default as dotenv } from 'dotenv'

dotenv.config()

const chat = new OpenAI({
  streaming: true,
  callbackManager: CallbackManager.fromHandlers({
    async handleLLMNewToken(token) {
      console.log(token)
    },
  }),
})

const response = await chat.call('Write me a song about sparkling water.')
console.log(response)
