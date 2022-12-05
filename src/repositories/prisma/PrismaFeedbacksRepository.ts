import { prisma } from "../../instances/prisma";
import { FeedbacksRepository, FeedbackCreateData } from "../FeedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create ({type, comment, screenshot}: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    }) 
  };
}