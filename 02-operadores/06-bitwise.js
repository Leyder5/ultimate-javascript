// Lección 24: Operadores bitwise (opcional)
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// 4 = 00000100
// 5 = 00000101
// 6 = 00000110
// 7 = 00000111

// OR bitwise: pone 1 si alguno de los dos bits es 1
console.log(1 | 3);   // 00000011 -> 3
console.log(1 | 4);   // 00000101 -> 5
console.log(3 | 5);   // 00000111 -> 7

// AND bitwise: pone 1 solo si ambos bits son 1
console.log(1 & 3);   // 00000001 -> 1
console.log(1 & 4);   // 00000000 -> 0
console.log(3 & 5);   // 00000001 -> 1
