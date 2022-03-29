// os는 그냥 자동으로 깔려있기 때문에 import만 해주면 된다
// 한 마디로 그냥 가져오기만 하면 됨
// os는 윈도우에 관련된 정보임
const os = require('os');

console.log('운영체제 정보 ----------------------------');
console.log('os.arch() : ', os.arch());
console.log('os.platform() : ', os.platform());
console.log('os.type() : ', os.type());
console.log('os.uptime() : ', os.uptime());
console.log('os.hostname() : ', os.hostname());
console.log('os.release() : ', os.release());

console.log('경로 ------------------------------');
console.log('os.homedir() : ', os.homedir());
console.log('os.tmpdir() : ', os.tmpdir());

console.log('cpu 정보 -------------------------------');
console.log('os.cpus() : ', os.cpus());
console.log('os.cpus().length : ', os.cpus().length);

console.log('메모리 정보 --------------------------');
console.log('os.freemem() : ', os.freemem());
console.log('os.totalmem() : ', os.totalmem());