const parseEnv = () => {
    Object.entries(process.env)
        .filter(([key]) => key.includes('RSS_'))
        .forEach(([key, value]) => console.log(`${key}=${value}`));
};

parseEnv();