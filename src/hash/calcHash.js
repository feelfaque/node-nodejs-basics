import { createHash } from "node:crypto";
import { readFile } from 'node:fs';
const fileToHash = "src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
        readFile(fileToHash, 'utf8', (err, data) => {
            if(err) {
                throw new Error(err);
            }
            const hash = createHash('sha256').update(data).digest('hex');
            console.log(hash);
        });
};

await calculateHash();