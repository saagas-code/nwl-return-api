import express from 'express'
import { transport } from './instances/nodemailer';
import { prisma } from './instances/prisma';
import { PrismaFeedbacksRepository } from './repositories/prisma/PrismaFeedbacksRepository';
import { SubmitFeedbackUseCase } from './useCases/SubmitFeedbackUseCase';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const {type, comment, screenshot} = req.body

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()
  
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type, comment, screenshot
  })



  return res.status(201).send()
})