import { Chess } from "chess.js";

export function getBoardStatesFromPGN(pgn) {
  const chess = new Chess();
  chess.loadPgn(pgn);

  const history = chess.history();
  const states = [];

  const temp = new Chess();

  states.push(temp.board()); // initial position

  history.forEach(move => {
    temp.move(move);
    states.push(temp.board());
  });

  return states;
}
