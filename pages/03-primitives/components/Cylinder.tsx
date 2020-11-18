import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Cylinder } from '@react-three/drei';
import { Mesh } from 'three';
import { SPEED_ROTATION } from '../constants';

export default function CylinderGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radiusTop = 0.5;
  const radiusBottom = 0.5;
  const height = 1;
  const radialSegments = 12;

  // Defaults ↓
  const heightSegments = 1;
  const openEnded = false;
  const thetaStart = 0;
  const thetaLength = 2 * Math.PI;

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += SPEED_ROTATION;
      mesh.current.rotation.y += SPEED_ROTATION;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <Cylinder
        args={[
          radiusTop,
          radiusBottom,
          height,
          radialSegments,
          heightSegments,
          openEnded,
          thetaStart,
          thetaLength,
        ]}
      >
        <meshPhongMaterial attach="material" color="hotpink" />
      </Cylinder>
    </mesh>
  );
}
