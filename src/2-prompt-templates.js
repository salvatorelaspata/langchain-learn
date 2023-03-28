import { PromptTemplate } from 'langchain/prompts'

const template = 'Chi ha inventato {product} e perché?'
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ['product'],
})

const res = await prompt.format({ product: 'la scatola di pandora' })
console.log(res)
