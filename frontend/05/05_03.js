// 繰り返し処理の例
for (let i = 0; i < 3; i++) {
    console.log('繰り返し処理１:'+i);
    console.log('繰り返し処理２:'+i);
}

console.log('for文終了後の処理');



// break文を使った例
for (let i = 0; i < 3; i++) {
    console.log('繰り返し処理１:'+i);
    break;      // break文
    console.log('繰り返し処理２:'+i);
}
console.log('for文終了後の処理');



// continue文の例
for (let i = 0; i < 3; i++) {
    console.log('繰り返し処理１:'+i);
    continue;      // continue文
    console.log('繰り返し処理２:'+i);
}

console.log('for文終了後の処理');