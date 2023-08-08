// lenght
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Kalimat Pertama: ", (kalimat1) => {
    rl.question("Masukkan Kalimat Kedua: ",  (kalimat2) => {
        // Menggabungkan kalimat1 dan kalimat2 menggunakan method concat()
        const kalimatGabung = kalimat1.concat(kalimat2);
        console.log(`Hasil Penggabungan: ${kalimatGabung}`);
        rl.close();
    })
})