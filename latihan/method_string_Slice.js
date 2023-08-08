// lenght
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Sebuah Kalimat: ", (kalimat) => {
    rl.question("Masukkan Indeks Awal: ", (startIndex) => {
        rl.question("Masukkan Indeks Akhir: ", (endIndex) => {
        startIndex = Number(startIndex);
        endIndex  = Number(endIndex);
       const slicedSubstring = kalimat.slice(startIndex, endIndex);
       console.log(`Hasil slice Dari Indeks ${startIndex} hinngga ${endIndex}: ${slicedSubstring}`);
        rl.close();
        });
    });
});
