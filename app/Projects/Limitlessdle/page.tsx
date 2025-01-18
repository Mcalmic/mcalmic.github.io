'use client'
import { cardList } from './cardList'
import { useState } from 'react';

function Blankify(original: string) {
    let blankName = "";
    for (let i = 0; i < original.length; i++) {
        blankName += original[i] === " " ? "space " : "_ ";
    }
    return blankName;
}

export default function Limitlessdle() {
    const [card, setCard] = useState(cardList[0]);
    const [revealed, setRevealed] = useState(false);
    const [guess, setGuess] = useState("");
    const [input, setInput] = useState("");
    const [started, setStarted] = useState(false);

    function handleStartClick() {
        setStarted(true);
        setRevealed(false);
        const currCard = cardList[Math.floor(Math.random() * cardList.length)];
        setCard(currCard);
        setGuess(""); 
        setInput("");
    }

    function handleGuessClick() {
        setGuess(input);
        setRevealed(true);
    }

    function handleRevealClick() {
        setRevealed(true);
    }

    return (
        <div className="bg-neutral-950 min-h-screen flex flex-col items-center p-8">
            <div className="w-full max-w-screen-md mx-auto px-8 xl:max-w-screen-lg mt-10 text-white">
            <h1 className="text-4xl sm:text-5xl font-bold text-violet-400">
                Limitlessdle
            </h1>
            <br/><hr/><br/>

                {started &&(
                <div className="mt-6">
                    <label className="block text-lg mb-2">Search for a card:</label>
                    <input 
                        list="card-list" 
                        id="card-search" 
                        name="card-search" 
                        className="w-full p-2 rounded border border-gray-600 bg-neutral-800 text-white"
                        onChange={(e) => setInput(e.target.value)} 
                        value={input}
                    />
                    <datalist id="card-list">
                        {cardList.map((card) => (
                            <option key={card.name} value={card.name}></option>
                        ))}
                    </datalist>
                </div>)}

                <div className="flex space-x-4 mt-4 text-xl">
                    <button 
                        onClick={handleStartClick} 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded transition"
                    >
                        New Card
                    </button>
                    {started && (<>
                    <button 
                        onClick={handleGuessClick} 
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded transition"
                    >
                        Guess
                    </button>
                    <button 
                        onClick={handleRevealClick} 
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded transition"
                    >
                        Reveal Answer
                    </button>
                    
                    </>)}
                </div>

                {started && <p id="blankCardName" className="mt-6 text-white text-3xl font-bold">{'Card Name: ' + Blankify(card.name)}</p>}

                {revealed && (<>

                    <div className="mt-6">
                        <p className="text-lg font-semibold">Your Guess:</p>
                        <p className="text-xl font-bold">{guess.length != 0 ? guess : 'None'}</p>
                    </div>
                    <div className="mt-6">
                        <p className="text-lg font-semibold">Correct Answer:</p>
                        <p id="cardName" className="text-xl font-bold text-yellow-400">{card.name}</p>
                        <p id="correct" className={`mt-2 text-2xl font-bold ${guess === card.name ? "text-green-400" : "text-red-400"}`}>
                            {guess === card.name ? "Correct!" : "Incorrect"}
                        </p>
                    </div>
                </>)}
                {started && (<>

                    <div className="mt-6">
                        <p className="font-semibold text-2xl">Results:</p>
                        <p className="whitespace-pre-line bg-neutral-800 p-4 rounded text-white">
                            {card.results}
                        </p>
                    </div>
                </>)}
            </div>
        </div>
    );
}
