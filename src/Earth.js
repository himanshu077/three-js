import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import React from "react";
import styles from "./Earth.module.scss";
import EarthModel from "./components/EarthModel";
import AirplaneModel from "./components/AirplaneModel";

const Earth = () => {
  return (
    <Canvas
      className={styles.container}
      camera={{ position: [0, 0, 5], fov: 60 }}
    >
      <Stars speed={1.2} factor={2} />
      {/* Use the earth gltf generated model, generated using */}
      <EarthModel />
      {/* pointLight from left side */}
      {/* <ambientLight intensity={1} /> */}
      <pointLight intensity={1.5} position={[-20, 0, -2]} />
      <pointLight />
      <OrbitControls />
    </Canvas>
  );
};

export default Earth;

// skfb.ly/6U8BH
// skfb.ly/6WXnK
// npx gltfjsx earth/earth.gltf
