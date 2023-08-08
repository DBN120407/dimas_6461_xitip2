// lenght
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Sebuah Kalimat: ", (kalimat) => {
       const kalimatTrimmed = kalimat.trim();
       console.log(`Kalimat Setelah Di-Trim: ${kalimatTrimmed}`);
        rl.close();
});