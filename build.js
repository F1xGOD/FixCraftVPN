import { rimraf } from 'rimraf';
import { copyFile, mkdir, readFile } from 'node:fs/promises';
import { build } from 'esbuild';

// read version from package.json
const pkg = JSON.parse(await readFile('package.json'));
process.env.ULTRAVIOLET_VERSION = pkg.version;

const isDevelopment = process.argv.includes('--dev');

await rimraf('dist');
await mkdir('dist');

// don't compile these files
await copyFile('uv/sw.js', 'uv/sw.js');
await copyFile('uv/uv.config.js', 'dist/uv.config.js');

await build({
    platform: 'browser',
    sourcemap: true,
    minify: !isDevelopment,
    entryPoints: {
        'uv.bundle': './uv/rewrite/index.js',
        'uv.client': './uv/client/index.js',
        'uv.handler': './uv/uv.handler.js',
        'uv.sw': './uv/uv.sw.js',
    },
    define: {
        'process.env.ULTRAVIOLET_VERSION': JSON.stringify(
            process.env.ULTRAVIOLET_VERSION
        ),
    },
    bundle: true,
    outdir: 'dist/',
});
