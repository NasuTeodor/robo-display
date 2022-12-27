/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.9 steel_frame_shelves_01_1k.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Rack(props) {
  const { nodes, materials } = useGLTF('/models/rack/steel_frame_shelves_01_1k.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.steel_frame_shelves_01.geometry} material={materials.steel_frame_shelves_01} />
    </group>
  )
}

useGLTF.preload('/steel_frame_shelves_01_1k.gltf')