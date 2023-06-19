import { existsSync, cp } from 'node:fs';
import { resolve } from 'node:path';

const copy = async (dir) => {
    const newDir = `${dir}_copy`;

    if(!existsSync(dir)||existsSync(newDir)) {
        throw new Error('FS operation failed');
    } else {
        cp(dir, newDir, { recursive: true }, (err) => {
            if (err) {
              console.error(err);
            }
        });
    }
};
const directoryPath = resolve('src/fs/files')
await copy(directoryPath);
