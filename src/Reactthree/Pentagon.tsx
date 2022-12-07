import React, { forwardRef, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Stars } from "@react-three/drei";
import styled from "styled-components";
import * as THREE from "three";
import { Background_style } from "../styles/General";

const Pentagon10 = () => {
  const tetha = (1 + Math.sqrt(5)) / 2;
  return new Float32Array([
    tetha,
    1 / tetha,
    0,
    tetha,
    -1 / tetha,
    0,
    1,
    -1,
    -1,
    1 / tetha,
    0,
    -tetha,
    1,
    1,
    -1,
    tetha,
    1 / tetha,
    0,
  ]);
};

const Pentagon9 = () => {
  const tetha = (1 + Math.sqrt(5)) / 2;
  return new Float32Array([
    -tetha,
    1 / tetha,
    0,
    -tetha,
    -1 / tetha,
    0,
    -1,
    -1,
    -1,
    -1 / tetha,
    0,
    -tetha,
    -1,
    1,
    -1,
    -tetha,
    1 / tetha,
    0,
  ]);
};

const Pentagon8 = () => {
  const tetha = (1 + Math.sqrt(5)) / 2;
  return new Float32Array([
    1 / tetha,
    0,
    -tetha,
    -1 / tetha,
    0,
    -tetha,
    -1,
    -1,
    -1,
    0,
    -tetha,
    -1 / tetha,
    1,
    -1,
    -1,
    1 / tetha,
    0,
    -tetha,
  ]);
};

const Pentagon7 = () => {
  const tetha = (1 + Math.sqrt(5)) / 2;
  return new Float32Array([
    1 / tetha,
    0,
    -tetha,
    -1 / tetha,
    0,
    -tetha,
    -1,
    1,
    -1,
    0,
    tetha,
    -1 / tetha,
    1,
    1,
    -1,
    1 / tetha,
    0,
    -tetha,
  ]);
};

const Pentagon6 = () => {
  const tetha = (1 + Math.sqrt(5)) / 2;
  return new Float32Array([
    0,
    -tetha,
    1 / tetha,
    0,
    -tetha,
    -1 / tetha,
    1,
    -1,
    -1,
    tetha,
    -1 / tetha,
    0,
    1,
    -1,
    1,
    0,
    -tetha,
    1 / tetha,
  ]);
};

const Pentagon5 = () => {
  const tetha = (1 + Math.sqrt(5)) / 2;
  return new Float32Array([
    -1,
    1,
    1,
    -tetha,
    1 / tetha,
    0,
    -1,
    1,
    -1,
    0,
    tetha,
    -1 / tetha,
    0,
    tetha,
    1 / tetha,
    -1,
    1,
    1,
  ]);
};

const Pentagon4 = () => {
  const tetha = (1 + Math.sqrt(5)) / 2;
  return new Float32Array([
    1 / tetha,
    0,
    tetha,
    1,
    -1,
    1,
    tetha,
    -1 / tetha,
    0,
    tetha,
    1 / tetha,
    0,
    1,
    1,
    1,
    1 / tetha,
    0,
    tetha,
  ]);
};

const Pentagon3 = () => {
  const tetha = (1 + Math.sqrt(5)) / 2;
  return new Float32Array([
    -1 / tetha,
    0,
    tetha,
    -1,
    -1,
    1,
    -tetha,
    -1 / tetha,
    0,
    -tetha,
    1 / tetha,
    0,
    -1,
    1,
    1,
    -1 / tetha,
    0,
    tetha,
  ]);
};

const Pentagon2 = () => {
  const tetha = (1 + Math.sqrt(5)) / 2;
  return new Float32Array([
    1 / tetha,
    0,
    tetha,
    -1 / tetha,
    0,
    tetha,
    -1,
    1,
    1,
    0,
    tetha,
    1 / tetha,
    1,
    1,
    1,
    1 / tetha,
    0,
    tetha,
  ]);
};

const tetha = (1 + Math.sqrt(5)) / 2;
const Pentagon1 = () => {
  const tetha = (1 + Math.sqrt(5)) / 2;
  return new Float32Array([
    1 / tetha,
    0,
    tetha,
    -1 / tetha,
    0,
    tetha,
    -1,
    -1,
    1,
    0,
    -tetha,
    1 / tetha,
    1,
    -1,
    1,
    1 / tetha,
    0,
    tetha,
  ]);
};

function Line({ start, end }: any) {
  console.log(start, end);
  const ref = useRef<any>();
  useLayoutEffect(() => {
    ref.current.geometry.setFromPoints(
      [start, end].map((point) => new THREE.Vector3(...point))
    );
  }, [start, end]);
  return (
    <line ref={ref}>
      <bufferGeometry />
      <lineBasicMaterial color="green" linewidth={10} />
    </line>
  );
}

const ManyBoxes = ({ count }: any) => {
  var array_num: any[] = [[0, 0, 0]];
  var box_position: any[] = [];
  for (var i = 0; i < count; i++) {
    let number = Math.floor(Math.random() * 6 + 1);
    if (array_num) {
      box_position = array_num[i];
      if (array_num[0] > 25 || array_num[1] > 25 || array_num[2] > 25) {
        number = Math.floor(Math.random() * 6 + 3);
      }
      if (array_num[0] < -25 || array_num[1] < -25 || array_num[2] < -25) {
        number = Math.floor(Math.random() * 3 + 1);
      }
      if (number % 6 == 0) {
        array_num.push([array_num[i][0] + 5, array_num[i][1], array_num[i][2]]);
      } else if (number % 6 == 1) {
        array_num.push([array_num[i][0], array_num[i][1] + 5, array_num[i][2]]);
      } else if (number % 6 == 2) {
        array_num.push([array_num[i][0], array_num[i][1], array_num[i][2] + 5]);
      } else if (number % 6 == 3) {
        array_num.push([array_num[i][0] - 5, array_num[i][1], array_num[i][2]]);
      } else if (number % 6 == 4) {
        array_num.push([array_num[i][0], array_num[i][1] - 5, array_num[i][2]]);
      } else if (number % 6 == 5) {
        array_num.push([array_num[i][0], array_num[i][1], array_num[i][2] - 5]);
      }
    }
  }

  return (
    <>
      {array_num.map((box: any, index) => (
        <>
          <mesh>
            {index != 0 ? (
              <Line start={box} end={array_num[index - 1]} />
            ) : null}
            <Box position={box} key={index} />
          </mesh>
        </>
      ))}
    </>
  );
};

const Box = (props: any) => {
  const mesh = useRef<any>(null);
  // useFrame(() => (mesh.current!.rotation.x= mesh.current!.rotation.y += 0.01))
  return (
    <mesh ref={mesh} {...props}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
};
const Polyhedron = ({ position, rotation, color }:any) => {
  const verticesOfCube = [
    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
];

const indicesOfFaces = [
    2,1,0,    0,3,2,
    0,4,7,    7,3,0,
    0,1,5,    5,4,0,
    1,2,6,    6,5,1,
    2,3,7,    7,6,2,
    4,5,6,    6,7,4
];
  return (
   <mesh
    position={position}
    rotation={rotation}
   >
    <polyhedronBufferGeometry
     attach="geometry"
     args={[verticesOfCube, indicesOfFaces, 1, 1]}
    />
    <meshBasicMaterial attach="material" color={color} />
   </mesh>
  );
 }
const PentaLine = (props: any) => {
  const penta = props.penta;
  console.log(penta.length / 3);
  const vertices = new Float32Array([]);
  return (
    <line>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={penta}
          itemSize={3}
          count={6}
        />
         {/* <lineBasicMaterial color="green" linewidth={5} /> */}
      </bufferGeometry>
      <meshBasicMaterial color='white' attach="material" />
     
    </line>
  );
};
const Tag = ({ text, ...props }: any) => {
  return (
    <Html {...props}>
      <h1
        style={{
          color: "white",
        }}
      >
        {text}
      </h1>
    </Html>
  );
};


const Pentagon = (props: any) => {
  const positions: any = {
    0: [1, 1, 1],
    1: [-1, -1, -1],
    2: [-1, 1, -1],
    3: [1, 1, -1],
    6: [0, -tetha, 1 / tetha],
    4: [0, tetha, -1 / tetha],
    5: [1 / tetha, 0, -tetha],
    
  };
  const items = props.titles;
  return (
      <Canvas style={{width:'140%', height:'100%', marginLeft: '-10vw'}}>
        <color attach="background" args={["black"]} />
        <Stars/>
        {/* <Html>{props.children}</Html> */}
        {items.map((item: string, index: number) => (
          <Tag position={positions[index]} text={item} />
        ))}
        {/* <Tag position={[1 / tetha, 0, tetha]} text="" /> */}
        {/* <Polyhedron position={[10,10,10]} rotation={[0,0,0]} color={"white"}/> */}
        {/* <color attach="background" args={['black']}/> */}
        <ambientLight intensity={0.3} />
        <PentaLine penta={Pentagon1()} />
        <PentaLine penta={Pentagon2()} />
        <PentaLine penta={Pentagon3()} />
        <PentaLine penta={Pentagon4()} />
        <PentaLine penta={Pentagon5()} />
        <PentaLine penta={Pentagon6()} />
        <PentaLine penta={Pentagon7()} />
        <PentaLine penta={Pentagon8()} />
        <PentaLine penta={Pentagon9()} />
        <PentaLine penta={Pentagon10()} />
        {/* <ManyBoxes count={200} /> */}
        <OrbitControls         
        makeDefault
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2.3}
        minPolarAngle={Math.PI / 2.3}
        enableZoom={false}
        enablePan={false} />
      </Canvas>
  );
};

export default Pentagon;
