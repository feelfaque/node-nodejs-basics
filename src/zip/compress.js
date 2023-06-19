import { createReadStream, createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { createGzip } from 'node:zlib';

const directory = resolve('src/zip/files');

const compress = async () => {
    const readableStream = createReadStream(`${directory}/fileToCompress.txt`);
    const writableStream = createWriteStream(`${directory}/archive.gz`)

    readableStream.pipe(createGzip())
                .pipe(writableStream);
};

await compress();