import { HumanChatMessage, SystemChatMessage } from 'langchain/schema'
import { default as dotenv } from 'dotenv'
import { chatopenai } from './instances/openai.js'

dotenv.config()
const chat = chatopenai({
  modelName: 'gpt-3.5-turbo',
})
export const run = async () => {
  const response = await chat.call([
    new HumanChatMessage('scrivimi una poesia baciata sulla programmazione.'),
  ])
  console.log(response)

  const response2 = await chat.call([
    new SystemChatMessage(
      'You are a helpful assistant that translates English to French.'
    ),
    new HumanChatMessage('Translate: I love programming.'),
  ])
  console.log(response2)

  const response3 = await chat.generate([
    [
      new SystemChatMessage(
        'You are a helpful assistant that translates English to French.'
      ),
      new HumanChatMessage(
        'Translate this sentence from English to French. I love programming.'
      ),
    ],
    [
      new SystemChatMessage(
        'You are a helpful assistant that translates English to French.'
      ),
      new HumanChatMessage(
        'Translate this sentence from English to French. I love artificial intelligence.'
      ),
    ],
  ])
  console.log(JSON.stringify(response3, null, 2))
}

run()

/*
HumanChatMessage: A chat message that is sent as if from a Human's point of view.
AIChatMessage: A chat message that is sent from the point of view of the AI system to which the Human is corresponding.
SystemChatMessage: A chat message that gives the AI system some information about the conversation. This is usually sent at the beginning of a conversation.
ChatMessage: A generic chat message, with not only a "text" field but also an arbitrary "role" field.
*/
