import { rename as renameFile, existsSync } from 'node:fs';

const rename = async (oldPath, newPath) => {
    if (!existsSync(oldPath)||existsSync(newPath)) {
        throw new Error('FS operation failed');
    } else {
        renameFile(oldPath, newPath, (err) => {
            if(err) throw new Error(err);
        });
    }
};

await rename('./files/wrongFileName.txt', './files/properFileName.md');