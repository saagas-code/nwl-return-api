import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();


app.use(cors( ))
app.use(express.json())
app.use(express.urlencoded())

app.use(routes)

app.listen(process.env.PORT || 8819, () => {
  console.log(`Rodando na porta ${process.env.PORT}`)
})
