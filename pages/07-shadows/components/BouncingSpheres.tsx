import { SphereWithShadow } from '.';
import { getRandomColor } from '../../utils';

export default function BouncingSpheres({ num }) {
  const spheres = Array(num).fill({});

  return (
    <>
      {spheres.map((_, ndx) => (
        <SphereWithShadow color={getRandomColor()} key={ndx} ndx={ndx} />
      ))}
    </>
  );
}
