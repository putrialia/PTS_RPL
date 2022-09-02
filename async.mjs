function samplePromise(){
    return Promise.resolve("Alia");
}

const name = await samplePromise();
console.info(name);