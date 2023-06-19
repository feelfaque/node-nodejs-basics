import { rename as renameFile, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const rename = async (oldPath, newPath) => {
    if (!existsSync(oldPath)||existsSync(newPath)) {
        throw new Error('FS operation failed');
    } else {
        renameFile(oldPath, newPath, (err) => {
            if(err) throw new Error(err);
        });
    }
};

const oldNamePath = resolve('src/fs/files/wrongFileName.txt');
const newNamePath = resolve('src/fs/files/properFileName.md');
await rename(oldNamePath, newNamePath);