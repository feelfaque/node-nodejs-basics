import { createReadStream, createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { createUnzip } from 'node:zlib';

const directory = resolve('src/zip/files')

const decompress = async () => {
    const readableStream = createReadStream(`${directory}/archive.gz`);
    const writableStream = createWriteStream(`${directory}/fileToCompress.txt`)

    readableStream.pipe(createUnzip())
                .pipe(writableStream);
};

await decompress();