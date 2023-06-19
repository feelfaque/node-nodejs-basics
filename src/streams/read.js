import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
const fileToRead = resolve('src/streams/files/fileToRead.txt');

const read = async () => {
   const stream = createReadStream(fileToRead, 'utf-8');

   stream.on('error',(error) => {
    console.log(`error: ${error.message}`);
    })

    stream.on('data', (data) => {
    process.stdout.write(data);
})
};

await read();