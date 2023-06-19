import { writeFile, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const create = async (text) => {
    const path = resolve('src/fs/files/fresh.txt');

    if (existsSync(path)) {
        throw new Error('FS operation failed');
    } else {
        writeFile(path, text, (err) => {
        if(err) console.error(err);
        });
    }
    
};

await create('I am fresh and young');