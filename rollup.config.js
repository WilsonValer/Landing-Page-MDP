import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'path/to/entry/file.js',
  output: {
    file: 'dist/landing-page"',
    format: 'umd'
  },
  plugins: [
    nodeResolve({ browser: true }),
    commonjs()
  ]
}