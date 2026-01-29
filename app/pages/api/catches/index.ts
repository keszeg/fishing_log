/**
 * COPILOT: Implement a Next.js API route for Catch CRUD.
 * GET:
 *  - Read userId from query
 *  - Return all Catch records for the user
 * POST:
 *  - Read species, weight, length, photoUrl from body
 *  - Create Catch linked to userId
 * - Use Prisma Client
 */import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
    const userId = req.query.userId as string;
    if (!userId) {
        return res.status(400).json({ error: 'Missing userId in query' });
    }

  switch (method) {
    case 'GET':
      try {
        const catches = await prisma.catch.findMany({
          where: { userId },
        });
        return res.status(200).json(catches);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch catches' });
      }
    case 'POST':
      const { species, weight, length, photoUrl } = req.body;
        if (!species || !weight || !length) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
      try {
        const newCatch = await prisma.catch.create({
            data: {
                species,
                weight,
                length,
                photoUrl,
                userId,
            },
        });
        return res.status(201).json(newCatch);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to create catch' });
      }
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  } 
}