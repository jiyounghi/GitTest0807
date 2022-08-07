// 함수 선언방법
// 1. 함수 선언문
show();

function show() {
    //실행할 문장
    console.log("함수 실행!")
}

//show();

// 2.함수 표현식(익명함수참조)

//func();

let func = function() {
    console.log("함수표현식 실행!");
}
func();

//함수실습. 이모지를 활용하여 출력하는 함수 구현하기 

let emo = prompt('기호를 입력하시오');
let num = parseInt(prompt('몇 줄 출력할지 입력하시오'));

let pyramid = function() {
    for(let i=1; i<=num; i++) {
        for(let j=1; j<=i; j++) {
            document.write(emo);
        }
        document.write('</br>');
    } 
}

pyramid();
