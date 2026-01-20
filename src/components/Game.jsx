import { useEffect, useState } from "react";
import { getBoardStatesFromPGN } from "../utils/chessReplay";
import { squareToPosition } from "../utils/squareToPosition";
import Piece from "./Piece";

export default function Game() {
  const [states, setStates] = useState([]);
  const [moveIndex, setMoveIndex] = useState(0);

  useEffect(() => {
    fetch("/games/sample.pgn")
      .then(res => res.text())
      .then(text => {
        const boardStates = getBoardStatesFromPGN(text);
        setStates(boardStates);
      });
  }, []);

  useEffect(() => {
    if (states.length && moveIndex < states.length - 1) {
      const timer = setTimeout(() => {
        setMoveIndex(i => i + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [moveIndex, states]);

  if (!states.length) return null;

  const board = states[moveIndex];

  return (
    <>
      {board.map((row, rank) =>
        row.map((piece, file) => {
          if (!piece) return null;

          return (
            <Piece
              key={`${file}-${rank}-${piece.type}`}
              position={squareToPosition(file, rank)}
              color={piece.color}
              type={piece.type}
            />
          );
        })
      )}
    </>
  );
}
