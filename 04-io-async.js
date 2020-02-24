const fs = require('fs');
fs.readFile(process.argv[2], 'utf8',
  (err, data) => {
    const lines = data.split('\n');
    console.log(lines.length - 1)
  }
)