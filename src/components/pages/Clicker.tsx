import {useState} from 'react';
import doggPreClick from '../../assets/dogg-pre-click.png';
import doggPostClick from '../../assets/dogg-post-click.png';
import './Clicker.css';
import {type MouseEvent, type AnimationEvent} from "react";

export function Clicker() {
    const [pets, setPets] = useState<number>(() => {
        return Number(localStorage.getItem('pets') ?? 0);
    });
    const [bouncing, setBouncing] = useState(false);

    function handleClick(e: MouseEvent<HTMLImageElement>) {
        const nextPets = pets + 1;
        setPets(nextPets);
        localStorage.setItem('pets', nextPets.toString());
        setBouncing(true);
        (e.target as HTMLImageElement).src = doggPostClick;
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
        </section>
    )
}
