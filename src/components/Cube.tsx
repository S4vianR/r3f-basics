import { Color, Vector3 } from "@react-three/fiber";

interface CubeInterface {
    position: Vector3;
    side: [width: number, height: number, depth: number];
    color: Color;
}

const Cube = ({ position, side, color }: CubeInterface) => {
    return (
      <>
        <mesh position={position}>
          <boxGeometry args={side} />
          <meshStandardMaterial color={color} />
        </mesh>
      </>
    );
  };

export default Cube;
