import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';

const filePath = resolve('src/streams/files/fileToWrite.txt');

const write = async () => {
    const stream = createWriteStream(filePath, {encoding: "utf-8"});

    process.stdin.on("data", data => {
       stream.write(data);
    })
};

await write();