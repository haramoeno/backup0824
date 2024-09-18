let array = ['WOMEN', 'MEN'];

// １番目のデータを'KID'に書き換える
array[1] = 'KIDS'

console.log(array);



// 配列に新たなデータを追加する例
let a = ['WOMEN', 'MEN'];

console.log(a);

// 配列の末尾に追加
a.push('KIDS');

console.log(a);

// 配列の先頭に追加
a.unshift('BABY');

console.log(a);



// 配列の末尾にあるデータを削除する例
let b = ['WOMEN','MEN','KIDS','BABY'];

console.log(b);

// 配列の末尾の要素を削除
b.pop();

console.log(b);

// 先頭を削除
b.shift();

console.log(b);