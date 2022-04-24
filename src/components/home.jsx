import { useEffect, useState } from "react";
import { Box } from "./box";
import "./home.css";
import { MoveIndicator } from "./moveIndicator";
import { Winnerbox } from "./winnerBox";

const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Home() {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(true);
    const [winner, setWinner] = useState(null);
    // const [move] = useState("../../public//click.wav")

    useEffect(() => {
        const audio = new Audio();
        audio.src = "../../public/click.wav"
        console.log(audio)
        audio.play();
    }, [])

  function handelMove(index) {
    const updatedBoard = [...board];
      if (board[index] == null && winner == null) {
      updatedBoard[index] = currentPlayer ? "X" : "O";
      setBoard(updatedBoard);
      setCurrentPlayer(!currentPlayer);
      // handelWinner()
      for (let i = 0; i < 8; i++) {
        let [x, y, z] = winningCondition[i];
        let temp = updatedBoard[x] + updatedBoard[y] + updatedBoard[z];
        if (temp == "XXX") {
          return setWinner("X");
        } else if (temp == "OOO") {
          return setWinner("O");
        }
      }
    } else if (winner !== null) {
        alert("Reset the board")
    }
  }

  function handelWinner() {
    for (let i = 0; i < 8; i++) {
      let [x, y, z] = winningCondition[i];
      let temp = board[x] + board[y] + board[z];
      console.log("temp", temp, x, y, z);
      // if (temp == "XXX") {
      //     return console.log("X")
      // } else if (temp == "OOO") {
      //     return console.log("O")
      // }
    }
  }
  function handelReset() {
      setBoard(new Array(9).fill(null));
      setWinner(null)
      setCurrentPlayer(true)
  }

  return (
    <div className="container">
          <p className="title">Welcome User</p>
          <MoveIndicator currentPlayer={currentPlayer}/>
      <div className="board">
        {board.map((e, i) => {
          return <Box val={e} index={i} handelMove={handelMove} />;
        })}
              <div>{winner !== null ? <Winnerbox winner={winner}/> : null}</div>
      </div>
      <div>
        <button onClick={handelReset} className="reset_board">
          Reset Board
        </button>
      </div>
    </div>
  );
}
export { Home };
