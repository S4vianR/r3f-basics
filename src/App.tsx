import { Canvas } from "@react-three/fiber";
import "./App.css";
import Cube from "./components/Cube";

const App = () => {
  return (
    <>
      <main>
        <Canvas>
          <directionalLight position={[0,0,2]} />
          <Cube position={[1, 1, 1]} side={[1, 1, 0]} color={"pink"}/>
        </Canvas>
      </main>
    </>
  )
}

export default App