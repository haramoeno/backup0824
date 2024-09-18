// 比較演算子の例1
let a = 3;
let b = 5;
let c = a > b;

console.log(a > b); // 3 > 5　なのでfalse
console.log(a < b); // 3 < 5　なのでtrue
console.log(c);         // 3 > 5 なので変数cにfalseが入る
console.log(typeof(c)); // 3のデータ型を出力




// 比較演算子の例2
let strValue= '1';          // データ型String 値 '1'
let intValue = 1;            // データ型NUmber 値 1

console.log(strValue=== intValue);  // データ型と値ともに一致しているかを比較
console.log(strValue == intValue);   // 値が一致しているか比較




// 論理演算子の例1
let d = 3;
let e = d >= 0 && d <= 100;

console.log(e);




// 論理演算子の例2
let f = 200;
let g = f >= 0 && f <= 100;

console.log(g);