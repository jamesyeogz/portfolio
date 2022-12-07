import React, { forwardRef, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { CameraShake, Html, OrbitControls, Reflector, useTexture,useGLTF, ScrollControls } from "@react-three/drei";
import styled from "styled-components";
import * as THREE from 'three'
import { AmbientLight } from "three";
import { Box, Charmander, Cubone, Mew } from "./Box";
import { Background_style } from "../styles/General";


  function Rig({ children }) {
    const ref = useRef()
    const vec = new THREE.Vector3()
    const { camera, mouse } = useThree()
    useFrame(() => {
      // camera.position.lerp(vec.set(mouse.x * 2, 0, 30), 0.1)
      // camera.position.lerp(vec.set(mouse.x * 2+30, 0, 0), 0.1)
      // camera.position.lerp(vec.set(mouse.x * 2-30, 0, 0), 0.1)
      // camera.position.lerp(vec.set(mouse.x * 2, 0, -30), 0.1)
      ref.current.position.lerp(vec.set(mouse.x * 10, mouse.y * 10, 0), 0.1)
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
    })
    return <group ref={ref}>{children}</group>
  }


  function Ground(props) {
    return (
      <Reflector resolution={1024} args={[1000,1000]} {...props}>
        {(Material, props) => <Material color="#f0f0f0" metalness={0} normalScale={[2, 2]} {...props} />}
      </Reflector>
    )
  }
const Background = () => {
  return (
    <Background_style>
        <Canvas>
        {/* <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} /> */}


          <color attach="background" args={['black']}/>
          <Rig>
            <Box position={[0,-100,500]}/>
            <Charmander position={[500,-100,0]} rotation={[0,60,0]} scale={3}/>
            <Mew position={[-500,-100,0]} rotation={[0,45,0]} scale={2}/>
            <Cubone position={[0,-100,-500]} rotation={[0,45,0]} scale={150} />
            <ambientLight intensity={0.5}  />
            {/* <Ground mirror={5} blur={[50, 50]} mixBlur={1} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-110} /> */}
            <Ground mirror={1} mixBlur={5} blur={[2000,2000]} mixStrength={2}  rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-110} />
          </Rig>
          
            {/* <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} /> */}
        </Canvas>
    </Background_style>
  )
}

export default Background
