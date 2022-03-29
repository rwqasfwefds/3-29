const fs = require('fs').promises;
fs.readFile('./readme.txt')
    // 성공하면 then안에 펑션이 실행
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    // 실패하면 catch안에 펑션이 실행
    .catch((err) => {
        console.log(err);
    })