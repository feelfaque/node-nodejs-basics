import { existsSync, readdir } from 'node:fs';
import { resolve } from 'node:path';

const list = async (folder) => {
   if(!existsSync(folder)) {
       throw new Error('FS operation failed');
   } else {
       readdir(folder, (err, files) => {
            if (err) {
                throw new Error(err);
            } else {
                console.log(files);
            }
       });
   }
};

const folderPath = resolve('src/fs/files');
await list(folderPath);