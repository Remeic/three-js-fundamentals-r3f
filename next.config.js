const withTM = require('next-transpile-modules')([
  '@react-three/drei',
  'three',
  'postprocessing',
]);

module.exports = withTM();
