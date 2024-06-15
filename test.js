const fs = require('fs')

fs.readFile('fstryd.txt', 'utf-8', (e, data) => {
    console.log(e.code, 'is error')
    console.log(data)
})