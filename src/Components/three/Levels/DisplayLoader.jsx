import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export default function DisplayLoader(props) {

    const gltf = useLoader(GLTFLoader, './display2.gltf', (loader) => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/node_modules/three/examples/js/libs/draco/gltf/');
        loader.setDRACOLoader(dracoLoader);
    });

    // useFrame((state) => {
    //     state.camera.lookAt(new Vector3(0, 1.5, 0))
    // });

    return (
        <primitive
            rotation={[0, -Math.PI / 2, 0]}
            object={gltf.scene}
            position={[0, 0, 0]}
            children-0-castShadow
        />
    );
}