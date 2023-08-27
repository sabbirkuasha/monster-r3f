import {
  AccumulativeShadows,
  CameraShake,
  ContactShadows,
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  RandomizedLight,
  Shadow,
  Stage,
} from "@react-three/drei";

export default function Configurator() {
  return (
    <>
      <OrbitControls autoRotate autoRotateSpeed={0.05} makeDefault />

      {/* <Environment preset="city" /> */}
      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr"
        background
        blur={0.01}
      />
      {/* <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh> */}
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <sphereGeometry args={[1, 128, 128]} />
        <meshStandardMaterial roughness={0.05} metalness={1} />
      </mesh>
      <mesh rotation={[-1.555, 0, 0]} castShadow receiveShadow>
        <planeGeometry args={[35, 35]} />
        <MeshReflectorMaterial
          blur={[1500, 1500]}
          resolution={2048}
          mixBlur={1}
          // mixStrength={10}
          roughness={1}
          depthScale={1.2}
          // minDepthThreshold={0.4}
          // maxDepthThreshold={1.4}
          color="#0d1117"
          metalness={0.5}
        />
      </mesh>
    </>
  );
}
