const path = require('path');

const string = __filename;

console.log("path.sep : ", path.sep);
console.log("path.delimiter : ", path.delimiter);

console.log('-------------------------------------------');
console.log("path.dirname() : ", path.dirname(string));
console.log("path.extname() : ", path.extname(string));
console.log("path.basename() : ", path.basename(string));
console.log("path.basename - extname : ", path.basename(string, path.extname(string)));

console.log('-----------------------------------------------');
console.log('path.parse() : ', path.parse(string));
console.log('path.format() : ', path.format({
    dir : 'C:\\users\\zerocho',
    name : 'path',
    ext : '.js'
}));
console.log('path.normalize() : ', path.normalize('C://users\\\zerocho\\\path.js'))
// 절대 경로 C 앞에 적으면 절대경로
console.log('-----------------------------------------------');
console.log('path.isAbsolute(C:\\) : ', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home) : ', path.isAbsolute('./home'));
// 상대 경로 ./ 이렇게 들어가는게 상대경로
console.log('-----------------------------------------------');
console.log('path.relative() : ', path.relative('C:\\users\\zerocho\\path.js', 'C:\\'));
console.log(__dirname);
console.log('path.join() : ', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));
