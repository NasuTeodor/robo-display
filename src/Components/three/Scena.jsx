import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { PlaneGeometry, TextureLoader, Vector3 } from "three";
import { RectArealightWithHelper } from "./rectAreaLight";
import LevelOne from "./Levels/LevelOne";
import { useLoader } from "@react-three/fiber";
import Display2 from "./Levels/Display2";
import Display2Obj from "./Levels/Display2Obj";
import DisplayLoader from "./Levels/DisplayLoader";
import { Perf } from "r3f-perf";
import { Bloom, DepthOfField, EffectComposer, Noise, SMAA, SSR, TiltShift, Vignette } from "@react-three/postprocessing";

function Scena() {

    return (
        <Canvas
            camera={{ rotateZ: Math.PI }}
            dpr={window.devicePixelRatio * .9}
            gl={{
                powerPreference: 'high-performance',
                // alpha: false,
                // antialias: false,
                stencil: false,
                depth: false
            }}
        >
            {/* <fog attach={"fog"} color="#161616" near={8} args={['#050505']} /> */}
            {/* <ambientLight intensity={2} color={"purple"} position={[-10, 30, 20]}/> */}
            <Perf position='top-left' />
            <Environment preset='sunset' blur={1} />
            <PerspectiveCamera makeDefault fov={50} position={[-4.5, 4.2, 4.5]} />
            <OrbitControls target={[0, 0, 0]} />
            <ambientLight position={[0, 10, 0]} intensity={0.5} />
            <directionalLight position={[5, 3, 2]} intensity={0.2} castShadow />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.2, 0, 0.2]} >
                <planeGeometry attach="geometry" args={[90, 90]} />
                {/* 0xf57af5 "#feeeff"  */}
                {/* <meshPhongMaterial attach={"material"} color={0x000000} /> */}

                <meshBasicMaterial color={"#E1BEE7"} attach={"material"} />
            </mesh>

            {/* <LevelOne /> */}
            <Suspense fallback={null}>
                <Display2 />
                {/* <DisplayLoader /> */}
                {/* <Display2Obj /> */}
            </Suspense>

            <EffectComposer multisampling={2} disableNormalPass={true}>
                {/* <DepthOfField
                    focusDistance={0}
                    focalLength={0.02}
                    bokehScale={2}
                    height={480}
                />
                <Bloom
                    luminanceThreshold={0}
                    luminanceSmoothing={0.9}
                    height={300}
                    opacity={.2}
                />
                <Noise opacity={0.025} />
                <Vignette eskil={false} offset={0.1} darkness={.7} /> */}
            </EffectComposer>

        </Canvas>
    );
}
export default Scena