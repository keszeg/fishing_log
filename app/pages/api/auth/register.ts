/**
 * COPILOT: Implement a Next.js API route for user registration.
 * - Use Supabase signUp with email + password
 * - After successful signup, create a User record in Prisma
 * - Prisma User fields: id (uuid), email, username
 * - Handle errors properly
 * - Return created user
 */ 
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import { PrismaClient } from '@prisma/client';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
        return res.status(400).json({ error: 'Email, password and username are required' });
    }
    try {
        // Sign up user with Supabase
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });
        if (error) {
            return res.status(400).json({ error: error.message });
        }
        const supabaseUser = data.user;
        if (!supabaseUser) {
            return res.status(500).json({ error: 'Failed to create user in Supabase' });
        }
        // Create user record in Prisma
        const newUser = await prisma.user.create({
            data: {
                id: supabaseUser.id,
                email: supabaseUser.email!,
                username,
            },
        });
        return res.status(201).json({ user: newUser });
    } catch (err) {
        console.error('Registration error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}