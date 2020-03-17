'use strict';
const number = process.argv[2] || 0;　//process.argv配列に[2]の数字を追加する、ここがFalsyの場合０をいれる
let sum = 0;
for (let i = 1; i <= number; i++){
    sum = sum + i;
}
console.log(sum) 