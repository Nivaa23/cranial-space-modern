/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { forwardRef, useRef, useMemo, useLayoutEffect, useEffect } from 'react';
import { Color } from 'three';
import './Silk.css';

const hexToNormalizedRGB = hex => {
  hex = hex.replace('#', '');
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255
  ];
};

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor; // Primary Purple (#5227FF)
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  
  // Center vignette logic to fade the animation toward the outer edges
  vec2 center      = vec2(0.5, 0.5);
  float dist       = distance(vUv, center);
  float vignette   = smoothstep(0.85, 0.25, dist);

  // Auto-flowing looping animation (no mouse influence)
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  // Silk flow pattern creation
  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  // Normalize pattern to 0.0 - 1.0 range
  float nPattern = clamp((pattern - 0.2) / 0.8, 0.0, 1.0);

  // Rich purple shadow base (22% brightness of uColor) representing 20-25% dark shadow coverage
  vec3 baseBg = uColor * 0.22;

  // Make the vibrant purple (uColor) highly dominant (75-80% rich purple tones)
  float wave = smoothstep(0.06, 0.42, nPattern);
  vec3 col = mix(baseBg, uColor, wave);

  // Subtle natural white highlight in the top peaks of the silk
  float peak = smoothstep(0.9, 0.98, nPattern);
  col = mix(col, vec3(1.0, 1.0, 1.0), peak * 0.12);

  // Add fine noise detail
  col -= (rnd / 30.0) * uNoiseIntensity;

  // High opacity in the center to maintain the rich purple color dominance
  float alpha = (0.85 + 0.15 * wave) * vignette;

  gl_FragColor = vec4(col, alpha);
}
`;

const SilkPlane = forwardRef(function SilkPlane({ uniforms }, ref) {
  const { viewport } = useThree();

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [ref, viewport]);

  useFrame((_, delta) => {
    if (ref.current) {
      // Continuous looping auto-flow animation speed
      ref.current.material.uniforms.uTime.value += 0.05 * delta;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial 
        uniforms={uniforms} 
        vertexShader={vertexShader} 
        fragmentShader={fragmentShader} 
        transparent={true}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
});
SilkPlane.displayName = 'SilkPlane';

const Silk = ({ speed = 3.5, scale = 1.1, color = '#5227FF', noiseIntensity = 1.2, rotation = 0 }) => {
  const meshRef = useRef();

  const uniforms = useMemo(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 }
    }),
    [speed, scale, noiseIntensity, color, rotation]
  );

  return (
    <div className="silk-canvas-container">
      <Canvas dpr={[1, 2]} frameloop="always" camera={{ fov: 75, near: 0.1, far: 1000 }}>
        <SilkPlane ref={meshRef} uniforms={uniforms} />
      </Canvas>
    </div>
  );
};

export default Silk;
