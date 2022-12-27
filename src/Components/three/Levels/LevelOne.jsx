import { MeshDistortMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { Suspense } from "react";
import { TextureLoader } from "three";
import { RectArealightWithHelper } from "../rectAreaLight";
import TexturaPodea from './images/floor_texture.png';
import { Rack } from "./models/Rack";



function LevelOne() {

    const floorTexture = useLoader(TextureLoader, TexturaPodea);

    return (
        <Suspense fallback={null}>
            <RectArealightWithHelper position={[-5, 5.5, 0]} color={"white"} width={1} height={1} intensity={100} rotation={[0, -Math.PI / 2, Math.PI / 2]} />

            <mesh name="floor" position={[0, .1, 0]} castShadow={true}>
                <boxGeometry args={[5, .2, 5]} attach={"geometry"} />
                <meshBasicMaterial color={"#f3d1d3"} attach={"material"} />
            </mesh>
            <mesh name="small_wall" position={[0, .3, 0]} rotation={[0, -Math.PI / 2, 0]} castShadow={true}>
                <boxGeometry args={[5, .2, 5]} attach={"geometry"} />
                <meshStandardMaterial map={floorTexture} />
            </mesh>

            <mesh position={[.2, 2.5, -2.6]}>
                <boxGeometry args={[5.4, 5, 0.1]} attach={"geometry"} />
                <meshBasicMaterial color={"#f3d1d3"} attach={"material"} />
            </mesh>

            <group scale={[0.2, 0.2, 0.2]} position={[-1.3, 0, -2]}>
                <Suspense fallback={null} >
                    <Rack />
                </Suspense>
            </group >

            <group position={[1.75, 1.2, 0]}>
                <mesh name="desk" >
                    <boxGeometry args={[1.5, 1.5, 5]} attach={"geometry"} />
                    <meshMatcapMaterial color={"#FFEBEE"} attach={"material"} />
                </mesh>
                <mesh position={[-.1, .8, 0]}>
                    <boxGeometry args={[1.6, .1, 5]} attach={"geometry"} />
                    <meshMatcapMaterial attach={"material"} color={"black"} />
                </mesh>
            </group>

            <mesh position={[-1.2, 1, .5]}>
                <sphereGeometry args={[1, 32]} attach={"geometry"} />
                <MeshDistortMaterial attach={"material"} color={"FFEBEE"} wireframe distort={.7} />
            </mesh>



            {/* SCARILE SPRE SUS */}
            <mesh name="perete_scari" position={[2.6, 2.5, 3.5]}>
                <boxGeometry args={[0.2, 5, 2]} attach={"geometry"} />
                <meshMatcapMaterial color={"white"} attach={"material"} />
            </mesh>
            <mesh position={[2.9, 2.25, 3.5]}>
                <boxGeometry args={[0.7, 4.5, 2]} attach={"geometry"} />
                <meshMatcapMaterial color={"white"} attach={"material"} />
            </mesh>
            <mesh position={[3.5, 2, 3.5]}>
                <boxGeometry args={[0.7, 4, 2]} attach={"geometry"} />
                <meshMatcapMaterial color={"white"} attach={"material"} />
            </mesh>
            <mesh position={[4.2, 1.7, 3.5]}>
                <boxGeometry args={[0.7, 3.5, 2]} attach={"geometry"} />
                <meshMatcapMaterial color={"white"} attach={"material"} />
            </mesh>

        </Suspense >
    );

}

export default LevelOne;