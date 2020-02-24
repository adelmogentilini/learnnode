const fs = require('fs');

const contentFile = fs.readFileSync(process.argv[2], 'utf8');
const lines = contentFile.split('\n');
console.log(lines.length - 1)