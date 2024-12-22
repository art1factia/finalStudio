import React, { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const GLBModel = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);
  const meshRef = useRef();

  useEffect(() => {
    if (gltf && gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          // 와이어프레임 활성화
          // child.material.wireframe = true;
          // child.material.color.set("gray"); // 색상 설정 (선택 사항)

        }
      });

      if (meshRef.current) {
        meshRef.current.scale.set(10, 10, 10); // 모델 스케일 조정
        meshRef.current.rotateY(Math.PI / 3)
      }
    }
  }, [gltf]);
  return (
    <primitive
      ref={meshRef}
      object={gltf.scene}
      position={[0, 0, 0]} // 모델 위치
    />
  );
};


const GLBViewer = ({ modelPath }) => {
  return (
    <div style={{ borderRadius: "30px", width: "100%", height: "100%", backgroundColor: "#ababab55", margin: "20px 0px", boxSizing: "border-box" }} >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        
      >
        {/* 조명 설정 */}
        <ambientLight color={"#ddf"} intensity={10} />
        <directionalLight position={[5, 5, 5]} intensity={0.1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} />

        {/* GLB 모델 */}
        <GLBModel url={modelPath} />

        {/* 카메라 컨트롤 */}
        <OrbitControls enableZoom={true} />
      </Canvas>
      <p style={{ fontFamily: "text me one", textAlign:"right", padding:"0px 20px" }}>MASCOT_WANDU</p>
    </div>
  );
};

export default GLBViewer;