# Prompts

[Prompts](https://js.langchain.com/docs/modules/prompts/)

Il testo che generalmente viene fornito come input a un modello di linguaggio è chiamato prompt. Questo input è raramente "hadcoded", ma piuttosto è costruito da più componenti. Il `PromptTemplate` è responsabile della costruzione di questo input.

## PromptValue

Una stringa che viene inserita nel prompt. Può essere una stringa semplice o un valore che viene convertito in stringa.

```typescript
const promptValue = 'Hello World'

const multiLinePromptValue = `
  Hello World
  This is a multi-line prompt
`
```

## PromptTemplate

Permette di definire una generazione di prompt dinamici tramite placeholder. I placeholder sono sostituiti con i valori forniti.

```typescript
import { PromptTemplate } from 'langchain/prompts'
// A `PromptTemplate` consists of a template string and a list of input variables.
const template = 'What is a good name for a company that makes {product}?'
const promptA = new PromptTemplate({ template, inputVariables: ['product'] })

// We can use the `format` method to format the template with the given input values.
const responseA = await promptA.format({ product: 'colorful socks' })
console.log({ responseA })
/*
  {
    responseA: 'What is a good name for a company that makes colorful socks?'
  }
  */
```

## Example Selectors

Fornire degli esempi oltre al prompt può essere utile per contestualizzare e indirizzare il prompt.

Nella libreria JS viene messa a disposizione la classe `ExampleSelector` che permette di selezionare degli esempi da un elenco di esempi. Questa classe ha la seguente interfaccia:

```typescript
class BaseExampleSelector {
  addExample(example: Example): Promise<void | string>
  selectExamples(input_variables: Example): Promise<Example[]>
}
```

### Example

**Select by Length**

```typescript
import {
  LengthBasedExampleSelector,
  PromptTemplate,
  FewShotPromptTemplate,
} from 'langchain/prompts'

export async function run() {
  // Create a prompt template that will be used to format the examples.
  const examplePrompt = new PromptTemplate({
    inputVariables: ['input', 'output'],
    template: 'Input: {input}\nOutput: {output}',
  })

  // Create a LengthBasedExampleSelector that will be used to select the examples.
  const exampleSelector = await LengthBasedExampleSelector.fromExamples(
    [
      { input: 'happy', output: 'sad' },
      { input: 'tall', output: 'short' },
      { input: 'energetic', output: 'lethargic' },
      { input: 'sunny', output: 'gloomy' },
      { input: 'windy', output: 'calm' },
    ],
    {
      examplePrompt,
      maxLength: 25,
    }
  )

  // Create a FewShotPromptTemplate that will use the example selector.
  const dynamicPrompt = new FewShotPromptTemplate({
    // We provide an ExampleSelector instead of examples.
    exampleSelector,
    examplePrompt,
    prefix: 'Give the antonym of every input',
    suffix: 'Input: {adjective}\nOutput:',
    inputVariables: ['adjective'],
  })

  // An example with small input, so it selects all examples.
  console.log(await dynamicPrompt.format({ adjective: 'big' }))
  /*
   Give the antonym of every input

   Input: happy
   Output: sad

   Input: tall
   Output: short

   Input: energetic
   Output: lethargic

   Input: sunny
   Output: gloomy

   Input: windy
   Output: calm

   Input: big
   Output:
   */

  // An example with long input, so it selects only one example.
  const longString =
    'big and huge and massive and large and gigantic and tall and much much much much much bigger than everything else'
  console.log(await dynamicPrompt.format({ adjective: longString }))
  /*
   Give the antonym of every input

   Input: happy
   Output: sad

   Input: big and huge and massive and large and gigantic and tall and much much much much much bigger than everything else
   Output:
   */
}
```

**Select by Similarity**

```typescript
import { OpenAIEmbeddings } from 'langchain/embeddings'
import {
  SemanticSimilarityExampleSelector,
  PromptTemplate,
  FewShotPromptTemplate,
} from 'langchain/prompts'
import { HNSWLib } from 'langchain/vectorstores'

export async function run() {
  // Create a prompt template that will be used to format the examples.
  const examplePrompt = new PromptTemplate({
    inputVariables: ['input', 'output'],
    template: 'Input: {input}\nOutput: {output}',
  })

  // Create a SemanticSimilarityExampleSelector that will be used to select the examples.
  const exampleSelector = await SemanticSimilarityExampleSelector.fromExamples(
    [
      { input: 'happy', output: 'sad' },
      { input: 'tall', output: 'short' },
      { input: 'energetic', output: 'lethargic' },
      { input: 'sunny', output: 'gloomy' },
      { input: 'windy', output: 'calm' },
    ],
    new OpenAIEmbeddings(),
    HNSWLib,
    { k: 1 }
  )

  // Create a FewShotPromptTemplate that will use the example selector.
  const dynamicPrompt = new FewShotPromptTemplate({
    // We provide an ExampleSelector instead of examples.
    exampleSelector,
    examplePrompt,
    prefix: 'Give the antonym of every input',
    suffix: 'Input: {adjective}\nOutput:',
    inputVariables: ['adjective'],
  })

  // Input is about the weather, so should select eg. the sunny/gloomy example
  console.log(await dynamicPrompt.format({ adjective: 'rainy' }))
  /*
   Give the antonym of every input

   Input: sunny
   Output: gloomy

   Input: rainy
   Output:
   */

  // Input is a measurement, so should select the tall/short example
  console.log(await dynamicPrompt.format({ adjective: 'large' }))
  /*
   Give the antonym of every input

   Input: tall
   Output: short

   Input: large
   Output:
   */
}
```

## Output Parsers

Gestiste la risposta del modello. E' possibile istruire il modello per fornire una risposta strutturata tramite StructuredOutputParser.

### StructuredOutputParser from Names and Descriptions

```typescript
import { PromptTemplate } from 'langchain'
import { StructuredOutputParser } from 'langchain/output_parsers'
const parser = StructuredOutputParser.fromNamesAndDescriptions({
  answer: "answer to the user's question",
  source: "source used to answer the user's question, should be a website.",
})

const formatInstructions = parser.getFormatInstructions()

const prompt = new PromptTemplate({
  template:
    'Answer the users question as best as possible.\n{format_instructions}\n{question}',
  inputVariables: ['question'],
  partialVariables: { format_instructions: formatInstructions },
})
const input = await prompt.format({
  question: 'What is the capital of France?',
})
```
