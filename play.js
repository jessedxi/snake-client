
const connect  = require('./client');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
      process.stdout.write('Terminated');
      process.stdout.write('\n')
        process.exit();
      }
    });
  }
  handleUserInput()
  return stdin;
}



console.log('Connecting ...');
connect();
setupInput();