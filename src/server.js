/**
 * The starting point of the application.
 *
 * @author Smilla Sollén <ss226uk@student.lnu.se>
 * @version 1.0.0
 */

import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const app = express()
const PORT = 3015

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static(join(__dirname, 'public')))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
