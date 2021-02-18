/* eslint-disable no-unused-vars */

export const testFunction = () => {
  console.log("hello test function");
};

/**
 * 
정렬>가장큰수
 
문제 설명
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

제한 사항
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
입출력 예
numbers	return
[6, 10, 2]	6210
[3, 30, 34, 5, 9] 9534330


* 느낀점. 
존나 복잡하게 만들었는데
이리해도 저리해도 약 3시간가량 못하던거
앞뒤로 더해서 비교하니까 바로되네 진짜 허무하다

 */

export const biggestNumber = input => {
  let answer = "";
  console.log("[ biggestNumber ]");
  console.log("input : ", input);

  input.sort((a, b) => {
    let next = a.toString();
    let pre = b.toString();

    if (Number(pre + next) > Number(next + pre)) {
      return 1;
    } else {
      return -1;
    }
  });

  for (let i = 0; i < input.length; i++) {
    answer = answer + input[i];
    if (answer === "0") {
      answer = "";
    }
  }
  return answer || "0";
};

/**
 * 모범답안
 */
function biggestNumberSolution(numbers) {
  var answer = numbers
    .map(v => v + "")
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join("");

  return answer[0] === "0" ? "0" : answer;
}
