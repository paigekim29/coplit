// 문제
// number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 평균을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 반드시 arr.reduce를 이용해서 풀어야 합니다.
// 빈 배열을 입력받은 경우, 0을 리턴해야 합니다.
// 입출력 예시
// let output = computeAverageOfNumbers([4, 5, 6]);
// console.log(output); // --> 5

function computeAverageOfNumbers(arr) {
  if(arr.length ===0) return 0
  return arr.reduce((acc,cur)=>acc+cur,0)/arr.length
}


function computeAverageOfNumbers(arr) {
    if(arr.length === 0){
      return 0; // for empty array. cannot put as inital value of reduce because it will cause NaN
    }
    let total = arr.reduce(function (acc, cur){
      return acc +cur;
    },0)
    return total / arr.length;
  }