// lenght
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Sebuah Kalimat: ", (kalimat) => {
    rl.question("Masukkan Indeks Awal: ", (startIndex) => {
        rl.question("Masukkan indeks akhir: ", (endIndex) =>{
       startIndex = Number(startIndex);
       endIndex = Number(endIndex);
       // Gunakan method substring untuk mengambil substring dari startIndex hingga endIndex
       const substringResult = kalimat.substring(startIndex, endIndex);
       console.log(`Hasil Substring Dari Indeks ${startIndex} hingga ${endIndex}: ${substringResult}`);
        rl.close();
        });
    });
});