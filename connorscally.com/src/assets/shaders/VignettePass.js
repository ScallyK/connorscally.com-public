const VignetteShader = {
    uniforms: {
      "tDiffuse": { value: null },
      "offset": { value: 1.0 },  // Adjust vignette intensity
      "darkness": { value: 1.5 } // Adjust darkness
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform float offset;
      uniform float darkness;
      varying vec2 vUv;
      
      void main() {
        vec4 color = texture2D(tDiffuse, vUv);
        float dist = distance(vUv, vec2(0.5, 0.5));
        color.rgb *= smoothstep(0.8, offset * 0.799, dist * darkness);
        gl_FragColor = color;
      }
    `
  };

export { VignetteShader };