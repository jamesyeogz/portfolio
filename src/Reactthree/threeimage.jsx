import { OrbitControls, Sky, Stars } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { AmbientLight } from "three";
import { Certificate, Charmander, Setting } from "./Box";

const Threeimage = ({ Clicked, isClicked }) => {
  const [Image, setImage] = useState("portfolio/images/Udemy.jpg");
  const [Logo, setLogo]= useState("portfolio/images/LogoUdemy.png");
  useEffect(() => {
    if (Clicked) {
      setImage(Clicked.image);
      setLogo(Clicked.logo);
    }
  }, [Clicked]);
  return (
    <Suspense>
      <Canvas
        style={{
          margin: "25px",
          height: "80%",
          width: "80%",
          borderRadius: "25px",
        }}
        camera={{ position: [-1, -2, -1], fov: 90 }}
      >
        <color attach="background" args={["black"]} />
        <Suspense fallback={null}>
          <Certificate Image={Image} Logo={Logo} />
          <Setting />
        </Suspense>
        <pointLight position={[0, 2, 0]} intensity={0.5} />
        {/* <ambientLight intensity={0.5} /> */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={3}
          maxPolarAngle={Math.PI / 2.3}
          minPolarAngle={Math.PI / 2.3}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </Suspense>
  );
};

export default Threeimage;
