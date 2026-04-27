import React, {useState} from 'react';
import doggPreClick from '../../assets/dogg-pre-click.png';
import doggPostClick from '../../assets/dogg-post-click.png';
import './Clicker.css';
import {type MouseEvent, type AnimationEvent} from "react";

export function Clicker() {
    const [pets, setPets] = useState<number>(() => {
        return Number(localStorage.getItem('pets') ?? 0);
    });
    const [bouncing, setBouncing] = useState(false);
    const [name, setName] = useState<string>(() => {
        return localStorage.getItem('name') ?? '';
    });

    const [userId] = useState<string>(() => {
        const storedId = localStorage.getItem('userId');
        if (storedId) {
            return storedId;
        }

        const newId = crypto.randomUUID();
        localStorage.setItem('userId', newId);
        return newId;
    });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'ok' | 'error'>('idle');

    function handleClick(e: MouseEvent<HTMLImageElement>) {
        const nextPets = pets + 1;
        setPets(nextPets);
        localStorage.setItem('pets', nextPets.toString());
        setBouncing(true);
        (e.target as HTMLImageElement).src = doggPostClick;
    }

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!name)
            return;
        try {
            const res = await fetch('/api/leaderboard', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id: userId, name, clicks: pets}),
            });
            setSubmitStatus(res.ok ? 'ok' : 'error');
            localStorage.setItem('name', name);
        } catch {
            setSubmitStatus('error');
        }
    }

    function handleBounceEnd(e: AnimationEvent<HTMLImageElement>) {
        setBouncing(false);
        (e.target as HTMLImageElement).src = doggPreClick;
    }

    return (
        <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            <h2>Pet the Dog</h2>

            <img
                src={doggPreClick}
                alt="Click me!"
                className={`clicker-dog${bouncing ? ' bouncing' : ''}`}
                draggable={false}
                onClick={handleClick}
                onAnimationEnd={handleBounceEnd}
                style={{imageRendering: 'pixelated'}}
                height={256}
                width={256}
            />
            <p style={{margin: 0, fontSize: '1.5rem'}}>Pets: <strong>{pets}</strong></p>

            <form onSubmit={handleSubmit} className="clicker-form">
                <label>
                    Your name:&nbsp;
                    <input
                        type="text"
                        value={name}
                        maxLength={128}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit score</button>
                {submitStatus === 'ok' && <p>Submitted!</p>}
                {submitStatus === 'error' && <p>Submission failed.</p>}
            </form>
        </section>
    )
}
