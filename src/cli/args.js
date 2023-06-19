const parseArgs = () => {
    const arr = process.argv;
    console.log(arr);
    for (let i = 2; i< arr.length; i++) {
        if (i%2===0) {
            let val = arr[i].slice(2);
            console.log(`${val} is ${arr[i+1]}`);
        }
    }
};

parseArgs();