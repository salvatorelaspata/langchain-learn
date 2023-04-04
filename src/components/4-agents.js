import { initializeAgentExecutor } from 'langchain/agents'
import { SerpAPI, Calculator } from 'langchain/tools'
import { openai } from './instances/openai.js'

const model = openai({ temperature: 0 })
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
