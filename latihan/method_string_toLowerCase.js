// lenght
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Sebuah Kalimat: ", (kalimat) => {
       const kalimatLowerCase = kalimat.toLowerCase();
       console.log(`Kalimat Dalam Huruf Kecil: ${kalimatLowerCase}`);
        rl.close();
});