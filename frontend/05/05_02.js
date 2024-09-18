// for文の例4
for (let i = 0; i < 10; i++) {
    let s = '(' + i + '):';
    for (let j = 0; j < 10; j++) {
        s = s + '*';
    }
    console.log(s);
}



//  for文の例5
for (let i = 0; i < 10; i++) {
    let s = '(' + i + '):';
    for (let j = 0; j < i; j++) {
        s = s + '*';
    }
    console.log(s);
}