var fs = require('fs');
fs.readFile('./test/input.jsx', 'utf8', function(err, data){
  var jsx = require('jsx-transform');

  // https://www.npmjs.com/package/jsx-transform
  const opt = {
    factory: 'React.createElement',
    passUnknownTagsToFactory: true,
    arrayChildren: false,
    unknownTagsAsString: false
  };
  const x = jsx.fromString(data, opt);
  console.log(x);
});
