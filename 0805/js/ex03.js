// 배열 선언
let array = [];
console.log(array);

// array[0] = 1;
// array[1] = 2;

for(let i=0; i<10; i++)
    array[i] = i+1;

// 배열에 데이터 추가(함수)
array.push(11);  //맨 끝쪽에 데이터 추가
array.push(12);
array.push(13);
array.push(14);
array.push(15);

//데이터 수정
array[0] = 20;

//데이터 삭제, 인덱스 없어도 되고 있어도 된다 
array.shift(); //앞쪽에서부터 데이터 삭제와 동시에 반환
array.pop(); //뒤에서부터 데이터 삭제와 동시에 반환 
//array.splice(1,5); //특정인덱스와 삭제할 데이터 수를 입력하여 삭제
array.splice(1,5,30, 31, 32, 34) //삭제한 위치에 새로운 데이터 추가 

console.log(array);
console.log(array.length);

console.log("***********************")
//반복문을 활용한 배열 데이터 접근
for(let i=0; i<array.length; i++)
    console.log(array[i]);

console.log("***********************")
// 파이썬의 for문과 비슷 
for(let num of array) {
    console.log(num);
}

console.log("***********************")
array.forEach(function(num, index){
    console.log(index,num);
}) 

console.log("***********************")
//화살표 함수
array.forEach((num, index) => {
    console.log(index,num);
}); 