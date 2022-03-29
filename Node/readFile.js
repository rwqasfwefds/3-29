// fs = 파일 시스템(그냥 모든 파일을 통틀어서 하는 말임)의 약자
const fs = require('fs');

// 첫 번재 매개변수 : 읽을 대상
// 두 번째 매개변수 : 그 대상을 실행 할 함수
// 에러가 있으면 빨리 중단하는게 좋아서 err이 먼저 옴
fs.readFile('./readme.txt', (err, data) => {
    if(err){
        // 에러를 던지면서 함수 중단
        // 한 마디로 에러 난걸 알려주는 거임
        // 그냥 return하면 함수만 중단 되지만 얘는 알려 줌
        throw err;
    }
    // toString를 안 쓰면 16진수로 출력이 됨
    // 사람이 읽을 수 있는 글자로 출력이 되게금 하는게 toString()
    console.log(data);
    console.log(data.toString());
})