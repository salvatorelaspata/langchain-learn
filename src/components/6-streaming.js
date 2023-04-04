import { openai } from './instances/openai.js'
import { CallbackManager } from 'langchain/callbacks'
import { HumanChatMessage } from 'langchain/schema.js'
const chat = openai({
  streaming: true,
  maxTokens: 25,
  callbackManager: CallbackManager.fromHandlers({
    async handleLLMNewToken(token) {
      console.log(token)
    },
  }),
})

const response = await chat.call([
  new HumanChatMessage('Write me a song about sparkling water.'),
])
console.log(response)
