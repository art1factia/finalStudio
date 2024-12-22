// shaders/fragmentShader.js
export default `
  #pragma glslify: snoise3 = require('glsl-noise/simplex/3d')

  varying vec2 vUv;
  uniform float uTime;

  void main() {
    float noise = snoise3(vec3(vUv * 3.0, uTime * 0.1));
    vec3 color = vec3(
      0.9 + 0.1 * sin(uTime + noise * 10.0),
      0.9 + 0.1 * sin(uTime + noise * 15.0),
      0.9 + 0.1 * sin(uTime + noise * 20.0)
    );
    gl_FragColor = vec4(color, 1.0);
  }
`;
