function samplePromise(){
    return Promise.resolve("Alia");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();