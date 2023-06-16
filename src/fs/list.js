import { existsSync, readdir } from 'node:fs';

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

await list('./files');