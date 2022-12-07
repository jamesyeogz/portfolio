import React, { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  Reflector,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

export const Cubone = (props) => {
  const gltf = useLoader(GLTFLoader, "/models/cubone/scene.gltf");
  return <primitive object={gltf.scene} {...props} />;
};

export const Mew = (props) => {
  const gltf = useLoader(GLTFLoader, "/models/mew/scene.gltf");
  return <primitive object={gltf.scene} {...props} />;
};

export const Charmander = (props) => {
  const gltf = useLoader(GLTFLoader, "/models/charmander/scene.gltf");
  return <primitive object={gltf.scene} {...props} />;
};

export const Box = (props) => {
  const gltf = useLoader(GLTFLoader, "/models/Box/Box.gltf");
  return <primitive object={gltf.scene} {...props} />;
};

export const Certificate = ({Image, Logo}) => {
  const mesh = useRef(null);
  const textures = useTexture([
    "portfolio/images/texture.jpg",
    "portfolio/images/texture.jpg",
    "portfolio/images/texture.jpg",
    "portfolio/images/texture.jpg",
    Image,
    Logo,
  ]);

  return (
    <>
      <mesh ref={mesh}>
        <boxBufferGeometry attach="geometry" args={[2, 1.5, 0.01]} />
        {textures.map((texture, idx) => (
          <meshBasicMaterial
            key={texture.id}
            attach={`material-${idx}`}
            map={texture}
          />
        ))}
      </mesh>
    </>
  );
};

export const Setting = () => {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
        <circleBufferGeometry args={[1, 32]} />
        <MeshReflectorMaterial
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.5, 0]}
          args={[3, 3]}
          mirror={0.5}
          mixBlur={10}
          mixStrength={0.8}
          blur={[2000, 2000]}
        />
        {/* <meshStandardMaterial attach='material' side={THREE.DoubleSide}/> */}
      </mesh>
    </>
  );
};
