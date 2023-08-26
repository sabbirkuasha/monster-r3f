import {
  Environment,
  MeshPortalMaterial,
  OrbitControls,
  PerspectiveCamera,
  RoundedBox,
  useTexture,
} from "@react-three/drei";
import { BackSide, DoubleSide } from "three";
import { Alien } from "./Alien";

export default function Experience() {
  const map = useTexture("HDRI/meadow_1k.jpg");
  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={2.5} />
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 8]} />
      <OrbitControls target={[0, 0.35, 0]} />
      <RoundedBox args={[4, 6, 0.3]}>
        <planeGeometry args={[3, 5]} />
        <MeshPortalMaterial side={DoubleSide}>
          <OrbitControls target={[0, 0.35, 0]} />
          <Alien position={[0, -1.5, 0]} />
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[15, 128, 128]} />
            <meshStandardMaterial map={map} side={BackSide} />
          </mesh>
          <Environment preset="sunset" />
          <ambientLight intensity={2.5} />
        </MeshPortalMaterial>
      </RoundedBox>
    </>
  );
}

const MonsterStage = ({ ...props }) => {
  return (
    <group {...props}>
      <h1>Hello</h1>
    </group>
  );
};
