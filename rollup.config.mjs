import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  input: 'src/lib-index.tsx', // Check this is your entry file
  sourcemap: true ,
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'ChatWidget', // Exposed global variable name
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }), // Ensure TypeScript uses the correct config
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-transform-runtime']
    }),
    terser(), // Minifies the output
    postcss(
      {
       plugins: [tailwindcss, autoprefixer],
      minimize: true,
      extract: false // Inline CSS in the JS bundle
      }
    ),
    json(), // Handles JSON imports
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
      'global': 'window' 
    }),
  ],
  external: ['react', 'react-dom']
};
