import { createInterface } from 'readline'
import { default as dotenv } from 'dotenv'

dotenv.config()
export const readlineCli = createInterface({
  input: process.stdin,
  output: process.stdout,
})
