import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { PlaneGeometry, TextureLoader } from "three";
import { RectArealightWithHelper } from "./rectAreaLight";
import LevelOne from "./Levels/LevelOne";
import { useLoader } from "@react-three/fiber";

import pereteTextura from './Levels/images/wall_texture.png';

function Scena() {

    const wallTexture = useLoader(TextureLoader, pereteTextura);
    const wallColor = "#F3E5F5";

    return (
        <Canvas>
            <ambientLight intensity={2} color={"purple"} position={[-10, 30, 20]}/>
            {/* <Environment preset='sunset' background='only' blur={1} /> */}
            <PerspectiveCamera makeDefault fov={50} position={[-8, 7, 8]} />
            <OrbitControls target={[0, 0, 0]} />
            {/* <ambientLight position={[0, 10, 0]} intensity={1.7} /> */}
            {/* <directionalLight position={[2, 2, 2]} intensity={0.2} castShadow={true} /> */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.2, 0, 0.2]} receiveShadow={true}>
                <planeGeometry attach="geometry" args={[90, 90]} />
                {/* 0xf57af5 "#feeeff"  */}
                {/* <meshPhongMaterial attach={"material"} color={0x000000} /> */}

                <meshBasicMaterial color={"#E1BEE7"} attach={"material"} />
            </mesh>

            <LevelOne />

            <mesh position={[5, 2.5, 0]}>
                <boxGeometry args={[5, 5, 5]} attach={"geometry"} />
                <meshBasicMaterial color={wallColor} attach={"material"} />
                {/* <Suspense fallback={<meshPhongMaterial attach={"material"} color={0x000000} />}>
                    <meshStandardMaterial map={wallTexture} />
                </Suspense> */}
            </mesh>

            {/* LevelTwo HERE */}

            <mesh position={[5, 5, -5]}>
                <boxGeometry args={[5, 10, 5]} attach={"geometry"} />
                <meshBasicMaterial color={"pink"} attach={"material"} />
                {/* <Suspense fallback={<meshPhongMaterial attach={"material"} color={0x000000} />}>
                    <meshStandardMaterial map={wallTexture} />
                </Suspense> */}
            </mesh>

            {/* LevelThree HERE */}

            <mesh position={[10, 7.5, -5]}>
                <boxGeometry args={[5, 15, 5]} attach={"geometry"} />
                <meshBasicMaterial color={"purple"} attach={"material"} />
                {/* <Suspense fallback={<meshPhongMaterial attach={"material"} color={0x000000} />}>
                    <meshStandardMaterial map={wallTexture} />
                </Suspense> */}
            </mesh>

            {/* LevelThree HERE */}

            <mesh position={[10, 10, -10]}>
                <boxGeometry args={[5, 20, 5]} attach={"geometry"} />
                <meshBasicMaterial color={"silver"} attach={"material"} />
                {/* <Suspense fallback={<meshPhongMaterial attach={"material"} color={0x000000} />}>
                    <meshStandardMaterial map={wallTexture} />
                </Suspense> */}
            </mesh>

        </Canvas>
    );
}

export default Scena