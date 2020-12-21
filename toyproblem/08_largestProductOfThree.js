// largestProductOfThree
// 문제
// 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.
//
//     입력
// 인자 1 : arr
// number 타입을 요소로 갖는 임의의 배열
// 출력
// number 타입을 리턴해야 합니다.
//     주의사항
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
//     배열의 요소는 음수와 0을 포함하는 정수입니다.
//     배열의 길이는 3 이상입니다.
//     입출력 예시
// let output = largestProductOfThree([2, 1, 3, 7]);
// console.log(output); // --> 42 (= 2 * 3 * 7)
//
// output = largestProductOfThree([-1, 2, -5, 7]);
// console.log(output); // --> 35 (= -1 * -5 * 7)

const largestProductOfThree = function (arr) {
  arr = arr.sort((a, b) => a - b)
  if (arr[0] * arr[1] > arr[arr.length - 2] * arr[arr.length - 1] && arr[arr.length - 1] > 0) {
    return arr[0] * arr[1] * arr[arr.length - 1]
  } else return arr.splice(arr.length - 3).reduce((acc, cur) => acc * cur, 1)
};