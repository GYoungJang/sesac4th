// for (let i = 1; i < 6; i++) console.log(' '.repeat(5 - i) + '*'.repeat(2 * i - 1));
// for (let i = 4; i > 0; i--) console.log(' '.repeat(5 - i) + '*'.repeat(2 * i - 1));

let j = 7;
for (let i = 1; i < 10; i++) {
  if (i < 6) console.log(' '.repeat(5 - i) + '*'.repeat(2 * i - 1));
  else {
    console.log(' '.repeat(i - 5) + '*'.repeat(j));
    j -= 2;
  }
}