import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";
import { BackSide } from "three";

export default function Experience() {
  const map = useTexture("HDRI/meadow_1k.jpg");
  return (
    <>
      {/* <color attach="background" args={["#ececec"]} /> */}
      <Environment preset="city" />
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 7]} />
      <mesh castShadow receiveShadow>
        {/* <boxGeometry args={[1, 1, 1]} /> */}

        <sphereGeometry args={[10, 128, 128]} />
        <meshStandardMaterial map={map} side={BackSide} />
      </mesh>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 128, 128]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
