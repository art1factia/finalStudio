import React, { useRef } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import glsl from 'babel-plugin-glsl/macro';

const GradientShaderMaterialCircle = shaderMaterial(
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
    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d)

    varying vec2 vUv;
    uniform float uTime;

    void main() {
      // vec2 modifiedUv = vec2(vUv.x * 0.3, vUv.y*1.7);
      float noise = snoise3(vec3(vUv*0.8, uTime * 0.05));
      vec3 color = vec3(
        1.0 + 0.1 * sin(uTime + noise * 20.0),
        0.75 + 0.2 * sin(uTime + noise * 10.0),
        1.0 + 0.05 * sin(uTime + noise * 10.0)
      );
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

// 재질을 위한 컴포넌트 생성
extend({ GradientShaderMaterialCircle });

const GradientCircle = () => {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uTime = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[10, 10]}/>
      <gradientShaderMaterialCircle uTime={0} />
    </mesh>
  );
};

export default GradientCircle