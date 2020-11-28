import { SPEED_ROTATION } from '../constants';
import { randomColor } from 'randomcolor';

export const rotateMesh = (meshRef) => {
  if (meshRef.current) {
    meshRef.current.rotation.x += SPEED_ROTATION;
    meshRef.current.rotation.y += SPEED_ROTATION;
  }
};

export const rotateMeshX = (meshRef, speed = SPEED_ROTATION) => {
  if (meshRef.current) {
    meshRef.current.rotation.x += speed;
  }
};

export const rotateMeshY = (meshRef, speed = SPEED_ROTATION) => {
  if (meshRef.current) {
    meshRef.current.rotation.y += speed;
  }
};

export const getRandomColor = () => randomColor({ hue: '#00FFFF', count: 18 });