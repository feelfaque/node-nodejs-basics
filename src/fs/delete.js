import { rm, existsSync } from 'node:fs';

const remove = async (path) => {
    if(!existsSync(path)) {
        throw new Error('FS operation failed');
    } else {
        rm(path, (err) => {
            if (err) throw new Error(err);
        });
    }
};

await remove('./files/fileToremove.txt');