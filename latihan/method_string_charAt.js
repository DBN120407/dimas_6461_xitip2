// lenght
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// charAt
rl.question("Masukkan Sebuah Kalimat: ", (inputString) => {
    rl.question("Masukkan Indeks Yang Ingin Anda Cek: ", (index) => {
        // konversi nilai index ke tipe number
        index = Number(index);
        // Periksa apakah index  valid (berada dalam rentang string)
        if (index >= 0 && index < inputString.length) {
            // Gunakan method charAt untuk mendapatkan karakter pada indeks yang diminta
            const character = inputString.charAt(index);
            console.log(`Karakter Pada Indeks ${index}: ${character}`);
        } else {
            console.log("Indeks Tidak Valid!");
        }
        rl.close();
    });
});