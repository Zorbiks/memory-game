import "../styles/ScoreBoard.css";

const ScoreBoard = ({ score, maxScore }) => {
    return (
        <div className="scoreboard">
            <div>Score: {score}</div>
            <div>Max Score: {maxScore}</div>
        </div>
    );
}

export default ScoreBoard;