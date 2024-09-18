let array1 = ['WOMAN','MEN'];
let array2 = ['KIDS','BABY'];

// 配列array1の末尾に、
// 配列array2の要素を結合して新しい配列を作成する
let array3 = array1.concat(array2)

console.log(array3);




let matrix = [['A','B','C'],['D','E','F']];

console.log(matrix);

console.log(matrix[0]); // 0番目の要素(配列)
console.log(matrix[1]); // 1番目の要素(配列)

console.log(matrix[0][0]); // 0番目の要素（配列）の0番目のデータ
console.log(matrix[1][2]); // 1番目の要素（配列）の2番目のデータ



// さまざまなデータ型の組み合わせ例
let mixArray= [1,2,3, 'WOMEN','MEN', ['RED','BLUE']];

console.log(mixArray);



// 空の配列
let array= [];

console.log(array); //  配列の中身
console.log(array.length); // 配列のデータ数