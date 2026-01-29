/**
 * COPILOT: Implement forgot password API route.
 * - Use Supabase resetPasswordForEmail
 * - Do NOT send custom emails
 * - Return success boolean
 */

import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }
    try {
        // Send password reset email with Supabase
        const { data, error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('Forgot password error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}