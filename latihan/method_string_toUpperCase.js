// lenght
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Sebuah Kalimat: ", (kalimat) => {
       const kalimatUpperCase = kalimat.toUpperCase();
       console.log(`Kalimat Dalam Huruf Besar: ${kalimatUpperCase}`);
        rl.close();
});