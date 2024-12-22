import React, { useRef } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import glsl from 'babel-plugin-glsl/macro';

// 쉐이더 코드 작성
const GradientShaderMaterialSimple = shaderMaterial(
  // Uniforms
  { uTime: 0 },
  // Vertex Shader
  glsl`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  glsl`
    #pragma glslify: snoise3 = require(glsl-noise/classic/3d)

    varying vec2 vUv;
    uniform float uTime;

    void main() {
      vec2 modifiedUv = vec2(-1.1 * vUv.x, vUv.y);
      float noise = snoise3(vec3( modifiedUv*0.9, uTime *0.1));
      vec3 color = vec3(
        0.8 + 0.2 * sin(uTime + noise * 15.0),
        0.9 + 0.2 * sin(uTime + noise * 20.0),
        1.05 + 0.05 * sin(uTime + noise * 15.0)
      );
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

// 재질을 위한 컴포넌트 생성
extend({ GradientShaderMaterialSimple });

const GradientPlaneSimple = () => {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uTime = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[15,8]}/>
      <gradientShaderMaterialSimple uTime={0} />
    </mesh>
  );
};

export default GradientPlaneSimple