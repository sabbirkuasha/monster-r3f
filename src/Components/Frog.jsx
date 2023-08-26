/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 .\public\models\Frog.gltf -o .\src\Components\Frog.jsx -r public 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Frog.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Frog">
            <skinnedMesh name="Cube057" geometry={nodes.Cube057.geometry} material={materials.Frog_Main} skeleton={nodes.Cube057.skeleton} />
            <skinnedMesh name="Cube057_1" geometry={nodes.Cube057_1.geometry} material={materials.Frog_Secondary} skeleton={nodes.Cube057_1.skeleton} />
            <skinnedMesh name="Cube057_2" geometry={nodes.Cube057_2.geometry} material={materials.Eye_Black} skeleton={nodes.Cube057_2.skeleton} />
            <skinnedMesh name="Cube057_3" geometry={nodes.Cube057_3.geometry} material={materials.Eye_White} skeleton={nodes.Cube057_3.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Frog.gltf')
