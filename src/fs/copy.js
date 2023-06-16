import { existsSync, cp } from 'node:fs';

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

await copy('./files');
