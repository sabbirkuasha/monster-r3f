"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
// import { Experience } from "@/Components/AllMonster";
import Experience from "@/Components/AllMonster";
import { Loader } from "@react-three/drei";

export default function Home() {
  return (
    <main className="p-10 bg-gray-700">
      <div className="h-[700px]">
        <Suspense fallback={<Loader />}>
          <Canvas shadows>
            <Experience />
          </Canvas>
        </Suspense>
      </div>
    </main>
  );
}
