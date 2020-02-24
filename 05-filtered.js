const fs = require('fs')
const path = require('path')
fs.readdir(process.argv[2], (err, files) => {

  files.filter((el) => {
    return path.extname(el) === (`.${process.argv[3]}`)
  }).map((fl) => { console.log(fl) })
})