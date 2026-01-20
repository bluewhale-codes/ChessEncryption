import { Chess } from "chess.js";


export function loadPGN(pgnText) {


  const chess = new Chess();
  chess.loadPgn(pgnText);
  return chess.history({ verbose: true });
}
