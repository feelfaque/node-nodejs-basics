import { readFile, existsSync } from 'node:fs';

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

await read('src/fs/files/fileToRead.txt');
