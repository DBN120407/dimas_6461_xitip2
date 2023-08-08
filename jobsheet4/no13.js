// lenght
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Sebuah Kalimat: ", (kalimat) => {
    rl.question("Masukkajn Kata Yang Ingin Anda Cari: ", (katacari) => {
        // Gunakan method indexOf untuk mencari kataCari Dalam Kalimat
        const indekskata = kalimat.indexOf(katacari);
        if (indekskata !== -1) {
            console.log(`kata '${katacari}' ditemukan pada indeks: ${indekskata}`);
        } else {
            console.log(`kata '${katacari}' tidak ditemukan dalam kalimat.`);
        }
        rl.close();
    });
});