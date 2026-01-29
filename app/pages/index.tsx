/**
 * COPILOT: Implement a Next.js page that:
 * - Fetches catches from /api/catches
 * - Stores them in React state
 * - Renders a list with species, weight, length
 * - Uses useEffect + fetch
 */
import { useEffect, useState } from 'react';

interface Catch {
    id: string;
    species: string;
    weight: number;
    length: number;
    photoUrl?: string;
    userId: string;
}
export default function CatchesPage() {
    const [catches, setCatches] = useState<Catch[]>([]);
    const userId = 'example-user-id'; // Replace with actual user ID logic
    useEffect(() => {
        async function fetchCatches() {
            try {
                const response = await fetch(`/api/catches?userId=${userId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch catches');
                }
                const data: Catch[] = await response.json();
                setCatches(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCatches();
    }, [userId]);
    return (
        <div>
            <h1>Catches</h1>
            <ul>
                {catches.map((catchItem) => (
                    <li key={catchItem.id}>
                        <strong>Species:</strong> {catchItem.species}, <strong>Weight:</strong> {catchItem.weight} lbs, <strong>Length:</strong> {catchItem.length} inches
                    </li>
                ))}
            </ul>
        </div>
    );
}