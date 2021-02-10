const net = require('net');
const stdin = process.stdin;

/*
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interprets incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => {
    console.log('Sucessfully connected to game server!');
    }); 

    conn.on('connect', () => {
      conn.write('Name: JD ');
    });

    
  

  conn.on('data',(data) => {
    console.log('Server says:', data);
  })

 
  return conn;
}


module.exports = connect;
