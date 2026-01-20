import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Piece({ position, color }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.position.lerp(
      { x: position[0], y: position[1], z: position[2] },
      0.15
    );
  });

  return (
    <mesh ref={ref} position={position}>
      <cylinderGeometry args={[0.3, 0.3, 0.6, 32]} />
      <meshStandardMaterial color={color === "w" ? "white" : "black"} />
    </mesh>
  );
}
