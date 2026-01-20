export default function ChessBoard() {
  const squares = [];

  for (let x = 0; x < 8; x++) {
    for (let z = 0; z < 8; z++) {
      squares.push(
        <mesh key={`${x}-${z}`} position={[x - 3.5, 0, z - 3.5]}>
          <boxGeometry args={[1, 0.1, 1]} />
          <meshStandardMaterial
            color={(x + z) % 2 === 0 ? "#eee" : "#333"}
          />
        </mesh>
      );
    }
  }

  return <>{squares}</>;
}
