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
import { Tribal } from "./Tribal";
import { Frog } from "./Frog";

export default function Experience() {
  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={2.5} />
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 8]} />
      <OrbitControls target={[0, 0.35, 0]} />
      <MonsterStage texture={"HDRI/meadow_1k.jpg"}>
        <Alien position={[0, -1.5, 0]} />
      </MonsterStage>
      <MonsterStage
        texture={"HDRI/promenade_de_vidy_1k.jpg"}
        position={[4, 0, 0]}
        rotation-y={-Math.PI / 8}
      >
        <Tribal position={[4, -1.5, 0]} />
      </MonsterStage>
      <MonsterStage
        texture={"HDRI/spree_bank_1k.jpg"}
        position={[-4, 0, 0]}
        rotation-y={Math.PI / 8}
      >
        <Frog position={[-4, -1.5, 0]} />
      </MonsterStage>
    </>
  );
}

const MonsterStage = ({ children, texture, ...props }) => {
  const map = useTexture(texture);
  return (
    <group {...props}>
      <RoundedBox args={[4, 6, 0.3]}>
        <planeGeometry args={[3, 5]} />
        <MeshPortalMaterial side={DoubleSide}>
          <PerspectiveCamera makeDefault fov={50} position={[0, 0, 8]} />
          <OrbitControls target={[0, 0.35, 0]} />
          {children}
          {/* <Alien position={[0, -1.5, 0]} /> */}
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[15, 128, 128]} />
            <meshStandardMaterial map={map} side={BackSide} />
          </mesh>
          <Environment preset="sunset" />
          <ambientLight intensity={2.5} />
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};
