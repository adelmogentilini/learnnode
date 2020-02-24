let totale = 0;
for (let i = 2; i < process.argv.length; i++) {
  totale += Number(process.argv[i]);
}

console.log(totale)