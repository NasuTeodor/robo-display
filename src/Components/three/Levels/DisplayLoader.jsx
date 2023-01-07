import React, { useMemo } from 'react';
import { Vector3 } from 'three';
import { useLoader, useGraph, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function DisplayLoader(props) {

    const gltf = useLoader(GLTFLoader, './display2.gltf');

    useFrame((state)=>{
        state.camera.lookAt(new Vector3(0 , 1.5, 0))
    });

    return (
        <primitive
        rotation={[0, -Math.PI/2, 0]}
        object={gltf.scene}
        position={[0, 0, 0]}
        children-0-castShadow
      />
    );
}