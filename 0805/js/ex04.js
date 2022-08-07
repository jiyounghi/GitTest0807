let arr = []; // 10개의 랜덤숫자를 가진 배열
let arr2 = []; // 짝수를 가진 배열 
let cnt = 0;

for(let i=0; i<10; i++) {
    arr[i] = parseInt(Math.random()*50)+1;
}

// 밑에 짝수 배열에 잘 들어갔는지 확인하기 위해 출력 
console.log("nums는 " + (arr.join()) + "이며 총 " + arr.length + "입니다.")

for(let i=0; i<arr.length; i++) {
    if(arr[i]%2==0) {
        arr2.push(arr[i]);
    }
}

//console.log("nums에 저장된 짝수는 " + arr2 + "이며 총 " + arr2.length + "입니다.")
console.log(`nums에 저장된 짝수는 ${arr2} 이며 총 ${arr2.length}개 입니다.`)