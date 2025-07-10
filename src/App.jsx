import { useEffect, useState } from "react";
import shuffleArray from "./utils/shuffleArray";

import GameTitle from "./components/GameTitle";
import ScoreBoard from "./components/ScoreBoard";
import Card from "./components/Card";

import CronoSrc from "./assets/crono.png";
import MarleSrc from "./assets/marle.png";
import LuccaSrc from "./assets/lucca.png";
import FrogSrc from "./assets/frog.png";
import MagusSrc from "./assets/magus.png";
import RoboSrc from "./assets/robo.png";
import CyrusSrc from "./assets/cyrus.png";
import SlashSrc from "./assets/slash.jpg";
import AylaSrc from "./assets/ayla.jpg";


const App = () => {
    const [characters, setCharacters] = useState([
        { id: "000", name: "Crono", image: CronoSrc },
        { id: "100", name: "Lucca", image: LuccaSrc },
        { id: "200", name: "Marle", image: MarleSrc },
        { id: "300", name: "Frog", image: FrogSrc },
        { id: "400", name: "Magus", image: MagusSrc },
        { id: "500", name: "Ayla", image: AylaSrc },
        { id: "600", name: "Robo", image: RoboSrc },
        { id: "700", name: "Cyrus", image: CyrusSrc },
        { id: "800", name: "Slash", image: SlashSrc },
    ]);

    const [score, setScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);
    const [clickedCharacters, setClickedCharacters] = useState([]);


    const cardClickHandle = (charId) => {
        if (clickedCharacters.indexOf(charId) !== -1) {
            setMaxScore(score);
            setScore(0);
            setClickedCharacters([]);
        } else {
            setClickedCharacters(prev => [...prev, charId]);
            setScore(prevScore => prevScore + 1);
        }
    }

    useEffect(() => {
        // Shuffle the cards every round
        setCharacters(shuffleArray(characters));

        // Winning Condition
        if (score === characters.length) {
            window.alert("You Win!");
            setScore(0);
            setMaxScore(0);
            setClickedCharacters([]);
        }
    }, [score])

    return (
        <>
            <GameTitle />
            <main>
                <div className="container">
                    <div className="game-container">
                        <ScoreBoard score={score} maxScore={maxScore} />
                        <div className="grid">
                            {
                                characters.map(character => (
                                    <Card
                                        key={character.id}
                                        id={character.id}
                                        name={character.name}
                                        image={character.image}
                                        cardClickHandle={cardClickHandle}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
