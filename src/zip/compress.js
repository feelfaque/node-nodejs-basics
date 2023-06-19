import { createReadStream, createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { createGzip } from 'node:zlib';

const directory = resolve('src/zip/files')
const filePath = resolve(`${directory}/fileToCompress.txt`);


const compress = async () => {
    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(`${directory}/archive.gz`)

    readableStream.pipe(createGzip())
                .pipe(writableStream);
};

await compress();