// Stores the active TCP connection object.
let connection;  

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      if(key === 'w') {
        conn.write('Move: up')
      }
      if(key === 'a') {
        conn.write('Move: left')
      }
      if(key === 's') {
        conn.write('Move: down')
      }
      if(key === 'd') {
        conn.write('Move: right');
      }
      if(key === 'q') {
        conn.write('Say: Hello World')
      }
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

module.exports = {setupInput};