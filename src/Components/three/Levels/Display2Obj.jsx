import React from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';

function Display2Obj() {

    const object = useLoader(OBJLoader, '/display2.obj');

    return (
        <primitive object={object} />
    )
}

export default Display2Obj