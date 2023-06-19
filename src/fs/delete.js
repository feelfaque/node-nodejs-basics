import { rm, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const remove = async (path) => {
    if(!existsSync(path)) {
        throw new Error('FS operation failed');
    } else {
        rm(path, (err) => {
            if (err) throw new Error(err);
        });
    }
};

const filePath = resolve('src/fs/files/fileToremove.txt');
await remove(filePath);