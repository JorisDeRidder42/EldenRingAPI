import { useState, useEffect } from 'react';

const useEldenRingStats = (itemId) => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch(`https://api.eldenring.com/weapons/${itemId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStats(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, [itemId]);

    return { stats, loading, error };
};

export default useEldenRingStats;
