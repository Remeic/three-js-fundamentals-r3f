import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';
import { Color, Mesh } from 'three';
import { rotateMeshY } from '../../utils';

interface IProps {
  emissive: Color;
  props: any;
}

export default function Sun({ emissive, ...props }: IProps) {
  const mesh = useRef<Mesh>();
  const radius = 1;
  const widthSegments = 6;
  const heightSegments = 6;

  useFrame(() => rotateMeshY(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Sphere args={[radius, widthSegments, heightSegments]}>
        <meshPhongMaterial emissive={emissive} />
      </Sphere>
    </mesh>
  );
}
