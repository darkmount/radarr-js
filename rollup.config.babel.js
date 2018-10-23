import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import flowEntry from 'rollup-plugin-flow-entry';
import { camelCase } from 'lodash';

// eslint-disable-next-line
const pkg = require(`${process.cwd()}/package.json`);
const moduleName = camelCase(pkg.name.split('/').pop());

const externalPkgs = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
];

export default {
    input: './src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            name: pkg.name,
            exports: 'named',
            interop: false
        },
        {
            file: pkg.module,
            format: 'es',
            name: pkg.name,
            exports: 'named'
        },
        {
            file: pkg.browser,
            format: 'iife',
            name: moduleName,
            moduleName
        }
    ],

    plugins: [
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers']
        }),
        resolve(),
        commonjs(),
        flowEntry()
    ],

    external: externalPkgs
};
