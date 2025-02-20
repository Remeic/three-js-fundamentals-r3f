import { Color } from 'three';
import { useTweaks } from 'use-tweaks';
import { CONSTANTS } from '../../constants';

export default function Fog(props) {
  const { color, far, near } = useTweaks('Fog', {
    color: CONSTANTS.DEFAULT_FOG_COLOR,
    near: { value: 1, min: 1, max: 2 },
    far: { value: 2, min: 1, max: 2 },
  });

  return (
    <>
      <color args={[color]} attach="background" />

      <fog
        attach="fog"
        color={new Color(color)}
        far={far}
        near={near}
        {...props}
      />
    </>
  );
}
