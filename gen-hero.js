import Sharp from 'sharp';
import * as fs from 'node:fs/promises';
import {join} from 'node:path';
import {spawn as spawnInner} from 'node:child_process';

const heroPath = join(import.meta.dirname, 'hero-raw.png');
const heroImage = new Sharp(heroPath);

const spawn = (command, args) => {
    const {promise, resolve, reject} = Promise.withResolvers();
    const process = spawnInner(command, args, {stdio: 'inherit'});
    process.on('exit', resolve);
    process.on('error', reject);
    return promise;
};

let tempDir;
try {
    tempDir = await fs.mkdtemp('herothumb');
    const thumbPath = join(tempDir, 'herothumb.png');
    await heroImage.resize(256, null, {}).toFile(thumbPath);
    await Promise.all([
        spawn('avifenc', ['-s', '2', heroPath, 'src/assets/images/hero.avif']),
        spawn('avifenc', ['-s', '0', '--depth', '8', '-q', '50', thumbPath, 'src/assets/images/herothumb.avif']),
        spawn('cwebp', ['-size', '100000', heroPath, '-o', 'src/assets/images/hero.webp']),
        spawn('cwebp', ['-size', '2000', thumbPath, '-o', 'src/assets/images/herothumb.webp'])
    ]);
} finally {
    if (tempDir) await fs.rm(tempDir, {recursive: true});
}
