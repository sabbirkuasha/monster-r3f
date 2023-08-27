"use client";
import Experience from "@/Components/AllMonster";
import Configurator from "@/Components/scene/Configurator";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
// import { Experience } from "@/Components/AllMonster";

export default function Home() {
  return (
    <main className="p-10 bg-gray-700">
      <div className="h-[700px]">
        {/* <Configurator /> */}

        <Suspense fallback={<Loader />}>
          <Canvas shadows camera={{ position: [3, 1.45, 3], fov: 50 }}>
            <Configurator />
          </Canvas>
        </Suspense>
      </div>
    </main>
  );
}
