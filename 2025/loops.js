// Loops

// While Loop
let i = 1;
while (i <= 50) {
  console.log(i);
  i = i + 1;
}

// Do-While Loop
i = 50;
do {
  console.log(i);
  i = i + 1;
} while (i <= 50);

// For Loop
for (a = 0; a <= 10; a++) {
  console.log(a);
}

// Break
let b = 0;
while(b < 6) {
    if( b == 3){
        break;
    }
    b = b+1;
}
console.log(b);

// Continue
b = 0;
while(b < 6) {
    if( b == 3){
        b = b+1;
        continue;
    }
    console.log(b); //  0, 1, 2, 4, 5
    b = b+1;
}

let c = 0;
let text = '';
while(c < 5) {
    if(c === 3){
        c++;
        continue;
    }
    text = text + c;
    c++;
}
console.log(text); //  0, 1, 2