import {useState, useEffect, useRef} from 'react';
import './Leaderboard.css';
import youIcon from '../../assets/you-icon.png';

interface LeaderboardEntry {
    id: string;
    name: string;
    clicks: number;
    created_at: string;
}

export function Leaderboard() {
    const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
    const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading');
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [userId] = useState(() => localStorage.getItem('userId'));
    const abortRef = useRef<AbortController | null>(null);

    async function fetchLeaderboard() {
        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;
        setStatus('loading');
        try {
            const response = await fetch('/api/leaderboard', {signal: controller.signal});
            if (!response.ok) {
                setStatus('error');
                return;
            }
            const data: LeaderboardEntry[] = await response.json();
            setEntries(data);
            setStatus('ok');
        } catch (e) {
            if (e instanceof DOMException && e.name === 'AbortError')
                return;
            setStatus('error');
        }
    }

    useEffect(() => {
        fetchLeaderboard();
        return () => abortRef.current?.abort();
    }, []);

    return (
        <section className="leaderboard-section">
            <h2>Leaderboard</h2>

            {status === 'loading' && <p>Loading...</p>}
            {status === 'error' && <p>Failed to load leaderboard.</p>}

            <div className="sunken-panel">
                {status === 'ok' && (
                    entries.length === 0
                        ? <p>No entries yet. Be the first to submit!</p>
                        : <table className="interactive" style={{width: "356px"}}>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Pets</th>
                            </tr>
                            </thead>
                            <tbody>
                            {entries.map((entry, i) => (
                                <tr
                                    key={entry.id}
                                    className={[
                                        entry.id === userId ? 'leaderboard-self' : '',
                                        entry.id === selectedId ? 'highlighted' : '',
                                    ].join(' ').trim() || undefined}
                                    onClick={() => setSelectedId(prev => prev === entry.id ? null : entry.id)}
                                >
                                    <td>{i + 1}</td>
                                    <td>{entry.name} {entry.id === userId ? <img width={16} height={16} src={youIcon} alt={"you!"}/> : ''}</td>
                                    <td>{entry.clicks.toLocaleString()}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                )}
            </div>

            <button onClick={fetchLeaderboard} style={{marginTop: '0.75rem'}} disabled={status === 'loading'}>
                Refresh
            </button>
        </section>
    );
}
