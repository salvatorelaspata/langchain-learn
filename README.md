# Table of Contents

- [langchain](#langchain)
  - [inspirazione](#inspirazione)
  - [Come funziona](#come-funziona)
  - [Qualche esempio](#qualche-esempio)
- [Come usare langchain](#come-usare-langchain)
  - [Installazione](#installazione)

# langchain

[JS Doc](https://js.langchain.com/docs/)
[Python Doc](https://python.langchain.com/en/latest/)

## inspirazione

langchain è un generatore di catene di linguaggio semplice. È scritto in Rust e utilizza l'algoritmo [catena di Markov](https://it.wikipedia.org/wiki/Catena_di_Markov) per generare nuove frasi.

## Come funziona

langchain legge un file di testo e crea una catena di Markov. Una volta che la catena è stata creata, langchain può generare nuove frasi utilizzando la catena.

## Qualche esempio

langchain può essere utilizzato per generare frasi in stile di un autore.
Per esempio, langchain può essere utilizzato per generare frasi in stile di Shakespeare. Per fare questo, langchain legge il testo di Shakespeare e crea una catena di Markov. Una volta che la catena è stata creata, langchain può generare nuove frasi in stile di Shakespeare utilizzando la catena.

# Come usare langchain

Come prima cosa è necessario scegliere quale linguaggio di programmazione utilizzare. Langchain è disponibile in [Rust](https://www.rust-lang.org/), [Python](https://www.python.org/) e [JavaScript](https://www.javascript.com/).

Ci concentreremo su JavaScript, ma il processo è simile per Python e Rust.

## Installazione

Per installare langchain in JavaScript, è necessario utilizzare npm:

```bash
npm install langchain
```

Per installare langchain in Python, è necessario utilizzare pip:

```bash
pip install langchain
```

## src/1-\*.js

Questo esempio mostra come utilizzare langchain in JavaScript.
E' possibile trovare questo esempio in [src/1-quick-start.js](src/1-quick-start.js)
