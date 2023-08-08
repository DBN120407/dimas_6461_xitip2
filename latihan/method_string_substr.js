// lenght
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Sebuah Kalimat: ", (kalimat) => {
    rl.question("Masukkan Indeks Awal: ", (startIndex) => {
        rl.question("Masukkan Panjang Substring: ", (length) => {
        startIndex = Number(startIndex);
        length = Number(length);
       const substringResult = kalimat.substr(startIndex, length);
       console.log(`Hasil Substring Dari Indeks ${startIndex} dengan panjang ${length}: ${substringResult}`);
        rl.close();
        });
    });
});
