import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      {/* <color attach="background" args={["#ececec"]} /> */}
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}

// This version of code will works too, since this time we are exporting named function we have to import using curly brace
// "use client";
// import { OrbitControls } from "@react-three/drei";

// export const Experience = () => {
//   return (
//     <>
//       <OrbitControls />
//       <mesh>
//         <boxGeometry />
//         <meshNormalMaterial />
//       </mesh>
//     </>
//   );
// };
