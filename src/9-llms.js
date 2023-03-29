import { openai } from './instances/openai.js'

export const run = async () => {
  const modelA = openai()
  const resA = await modelA.call(
    'What would be a good company name a company that makes colorful socks?'
  )
  console.log({ resA })
  // `generate` allows you to generate multiple completions for multiple prompts (in a single request for some models).
  const resB = await modelA.generate([
    'What would be a good company name a company that makes colorful socks?',
    'What would be a good company name a company that makes colorful sweaters?',
  ])

  console.log(JSON.stringify(resB, null, 2))
  // We can specify additional parameters the specific model provider supports, like `temperature`:
  const modelB = openai({ temperature: 0.9 })
  const resC = await modelA.call(
    'What would be a good company name a company that makes colorful socks?'
  )
  console.log({ resC })
  // We can get the number of tokens for a given input for a specific model.
  const numTokens = modelB.getNumTokens('How many tokens are in this input?')
  console.log({ numTokens })
}

run()
