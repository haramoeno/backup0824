// while文の例1
let a = 0;

while(a < 5) {  
    console.log(a);   // 繰り返すかの条件判定
    a = a + 1;
}



// while文の例2
let b = 5;

while(b < 5) {        // a = 5のため、条件が成立しない
    console.log(b);
    b= b + 1;
}



// do-while文の例
let c = 0;

do {
    console.log(c);
    c = c+ 1;
} while (c < 5);
// while文やdo-while文は
// はじめから繰り返しの回数が
// 何回であるかは決まっていない



// for文の例1
for (let d = 0; d < 3; d++) {    // 繰り返しの条件
    console.log(d);
}



// for文の例2
// 値を増減させる式が i--の場合の例
for (let e = 5; e > 3; e--) {
    console.log(e);
}



// for文の例3
// 九九を表示するプログラム
for (let f = 1; f < 10; f++) {
    for (let g = 1; g < 10; g++) {
        console.log( f + ' x ' + g + ' = ' + (f * g));
    }
}


