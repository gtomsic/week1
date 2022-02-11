const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('Enter your password: ', (input) => {
  if (input.length >= 10) {
    console.log('Strong password!');
    process.exit();
  } else {
    console.log('You have a weak password!');
    process.exit();
  }
});
