import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts', // Main entry point
  output: [
    {
      file: 'dist/appmint-motion.cjs.js',
      format: 'cjs', // CommonJS
    },
    {
      file: 'dist/appmint-motion.esm.js',
      format: 'esm', // ES Module
    },
    {
      file: 'dist/appmint-motion.umd.js',
      format: 'umd',
      name: 'AppmintMotion',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        animejs: 'anime', // Explicit mapping for animejs
      },
    },
  ],
  plugins: [
    resolve(), // Resolve node_modules
    commonjs(), // Convert CommonJS to ES Modules
    typescript({
      tsconfig: './tsconfig.json',
    }),
    terser(),
  ],
  external: ['react', 'react-dom', 'animejs'],
};
