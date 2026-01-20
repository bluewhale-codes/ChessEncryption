import { OrbitControls, Environment } from "@react-three/drei";
import ChessBoard from "./components/ChessBoard";
import Game from "./components/Game";
import ChessCryptFileTool from "./pages/ChessCryptFileTool";
import ChessVisualizer from "./pages/ChessVisualizer";
export default function App() {
  return (
    <>
      {/* <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} />

      <ChessBoard />
      <Game />

      <OrbitControls /> */}
      {/* <ChessCryptFileTool/> */}
      <ChessVisualizer/>
    </>
  );
}
