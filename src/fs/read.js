import { readFile, existsSync } from 'node:fs';
import { resolve } from 'node:path';

export const read = async (fileName) => { 
    if(!existsSync(fileName)) {
        throw new Error('FS operation failed');
    } else {
        readFile(fileName, 'utf8', (err, data) => {
            if(err) {
                throw new Error(err);
            } else {
                console.log(data);
            }
        });
    }
};

const filePath = resolve('src/fs/files/fileToRead.txt');
await read(filePath);
