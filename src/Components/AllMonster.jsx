import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";
import { BackSide } from "three";
import { Alien } from "./Alien";

export default function Experience() {
  const map = useTexture("HDRI/meadow_1k.jpg");
  return (
    <>
      {/* <color attach="background" args={["#ececec"]} /> */}
      <Environment preset="sunset" />
      <ambientLight intensity={2.5} />
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 8]} />
      <mesh castShadow receiveShadow>
        {/* <boxGeometry args={[1, 1, 1]} /> */}
        <sphereGeometry args={[15, 128, 128]} />
        <meshStandardMaterial map={map} side={BackSide} />
      </mesh>
      {/* <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 128, 128]} />
        <meshNormalMaterial />
      </mesh> */}
      <Alien position={[0, -1.5, 0]} />
    </>
  );
}
