var fs = require('fs');
fs.readFile('./test/input.jsx', 'utf8', function(err, data){
  var jsx = require('jsx-transform');

  const x = jsx.fromString(data, {
    factory: 'MyReact.createElement'
  });
  console.log(x);
});
