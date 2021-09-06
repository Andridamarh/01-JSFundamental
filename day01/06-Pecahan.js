/*
 uang Rp.115,000 berapa duit jika dipecah ke
 50ribuan, 20ribuan, 10ribuan, 5ribuan
 */

const money = 115000;
let sisa, limaPuluhRb, duaPuluhrb, sepuluhRb, limaRb;

limaPuluhRb = parseInt(money/50000);
sisa = money % 50000;

duaPuluhrb = parseInt(sisa/20000);
sisa = sisa % 20000;

sepuluhRb = parseInt(sisa/10000);
sisa = sisa % 10000;

limaRb = parseInt(sisa/5000);
sisa = sisa % 5000;

console.log(`Rp. 50rb = ${limaPuluhRb} lembar
Rp. 20rb = ${duaPuluhrb} lembar
Rp. 10rb = ${sepuluhRb} lembar
Rp. 5rb = ${limaRb} lembar
`);