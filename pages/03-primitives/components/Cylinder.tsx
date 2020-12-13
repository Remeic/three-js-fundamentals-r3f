import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Cylinder } from '@react-three/drei';
import { DoubleSide, Mesh } from 'three';
import { CONSTANTS } from '../../constants';
import { getRandomColor, rotateMesh } from '../../utils';

export default function CylinderGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radiusTop = CONSTANTS.EXAMPLES_HEIGHT / 2;
  const radiusBottom = CONSTANTS.EXAMPLES_HEIGHT / 2;
  const height = CONSTANTS.EXAMPLES_HEIGHT;
  const radialSegments = 12;

  // Defaults ↓
  const heightSegments = 1;
  const openEnded = false;
  const thetaStart = 0;
  const thetaLength = 2 * Math.PI;

  useFrame(() => rotateMesh(mesh));

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
        <meshPhongMaterial side={DoubleSide} color={getRandomColor()} />
      </Cylinder>
    </mesh>
  );
}
