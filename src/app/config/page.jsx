"use client";
import Experience from "@/Components/AllMonster";
import Configurator from "@/Components/scene/Configurator";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
// import { Experience } from "@/Components/AllMonster";

export default function Home() {
  return (
    <main className="p-10 bg-gray-700">
      <div className="h-[700px]">
        {/* <Configurator /> */}
        <Suspense fallback={null}>
          <Canvas shadows camera={{ position: [2, 0, 1], fov: 50 }}>
            {/* <color attach="background" args={["#101010"]} /> */}
            <Configurator />
            <mesh></mesh>
          </Canvas>
        </Suspense>
      </div>
    </main>
  );
}
