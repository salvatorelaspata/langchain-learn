import { OpenAI } from 'langchain/llms'
import { PromptTemplate } from 'langchain/prompts'
import { LLMChain } from 'langchain/chains'

const model = new OpenAI({ temperature: 0.9 })

const template = 'Chi ha inventato {product} e perché?'
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ['product'],
})
const chain = new LLMChain({ llm: model, prompt: prompt })

const res = await chain.call({ product: 'la scatola di pandora' })
console.log(res)
