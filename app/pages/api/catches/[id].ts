/**
 * COPILOT: Implement API route for updating and deleting a Catch by ID.
 * PUT:
 *  - Update species, weight, length, photoUrl
 * DELETE:
 *  - Delete Catch by id
 * - Return updated/deleted record
 */
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const { id } = req.query;
    if (!id || Array.isArray(id)) {
        return res.status(400).json({ error: 'Invalid or missing id parameter' });
    }
    switch (method) {
        case 'PUT':
            const { species, weight, length, photoUrl } = req.body;
            try {
                const updatedCatch = await prisma.catch.update({
                    where: { id },
                    data: { species, weight, length, photoUrl },
                });
                return res.status(200).json(updatedCatch);
            } catch (error) {
                return res.status(500).json({ error: 'Failed to update catch' });
            }
        case 'DELETE':
            try {
                const deletedCatch = await prisma.catch.delete({
                    where: { id },
                });
                return res.status(200).json(deletedCatch);
            } catch (error) {
                return res.status(500).json({ error: 'Failed to delete catch' });
            }
        default:
            res.setHeader('Allow', ['PUT', 'DELETE']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}
