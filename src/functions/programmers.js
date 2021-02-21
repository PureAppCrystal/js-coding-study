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

var a = "a";

/**
 * 
 * 
 124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

124 나라에는 자연수만 존재합니다.
124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

10진법	124 나라	10진법	124 나라
1	1	6	14
2	2	7	21
3	4	8	22
4	11	9	24
5	12	10	41
자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.

제한사항
n은 500,000,000이하의 자연수 입니다.
 */

export const nation124 = input => {
  let answer = "";

  answer = test(input, "");

  return answer;
};

let maxCount = 100;
let nowCount = 0;
const test = (number, answer) => {
  console.log("------------test --------");
  console.log("number : ", number);
  nowCount = nowCount + 1;
  if (nowCount > maxCount) return;

  let div = Math.floor(number / 3);
  console.log("div : ", div);

  const list = [1, 2, 4];
  let rest = number - div * 3;
  let mod = rest % 3;
  console.log("mod : ", mod);
  rest = mod === 0 ? 2 : mod - 1;
  console.log("rest : ", rest);
  answer = list[rest] + answer;
  console.log("answer : ", answer);

  if (div >= 2 && mod == 0) {
    // number.substr(0, number.length - 1);
    return test(div - 1, answer);
  } else if (div >= 1 && number != 3) {
    // number.substr(0, number.length - 1);
    return test(div, answer);
  } else {
    //
    return answer;
  }
};

/**
  * 
  추석 트래픽
이번 추석에도 시스템 장애가 없는 명절을 보내고 싶은 어피치는 서버를 증설해야 할지 고민이다. 장애 대비용 서버 증설 여부를 결정하기 위해 작년 추석 기간인 9월 15일 로그 데이터를 분석한 후 초당 최대 처리량을 계산해보기로 했다. 초당 최대 처리량은 요청의 응답 완료 여부에 관계없이 임의 시간부터 1초(=1,000밀리초)간 처리하는 요청의 최대 개수를 의미한다.

입력 형식
solution 함수에 전달되는 lines 배열은 N(1 ≦ N ≦ 2,000)개의 로그 문자열로 되어 있으며, 각 로그 문자열마다 요청에 대한 응답완료시간 S와 처리시간 T가 공백으로 구분되어 있다.
응답완료시간 S는 작년 추석인 2016년 9월 15일만 포함하여 고정 길이 2016-09-15 hh:mm:ss.sss 형식으로 되어 있다.
처리시간 T는 0.1s, 0.312s, 2s 와 같이 최대 소수점 셋째 자리까지 기록하며 뒤에는 초 단위를 의미하는 s로 끝난다.
예를 들어, 로그 문자열 2016-09-15 03:10:33.020 0.011s은 2016년 9월 15일 오전 3시 10분 **33.010초**부터 2016년 9월 15일 오전 3시 10분 **33.020초**까지 **0.011초** 동안 처리된 요청을 의미한다. (처리시간은 시작시간과 끝시간을 포함)
서버에는 타임아웃이 3초로 적용되어 있기 때문에 처리시간은 0.001 ≦ T ≦ 3.000이다.
lines 배열은 응답완료시간 S를 기준으로 오름차순 정렬되어 있다.
출력 형식
solution 함수에서는 로그 데이터 lines 배열에 대해 초당 최대 처리량을 리턴한다.
입출력 예제
예제1
입력: [
2016-09-15 01:00:04.001 2.0s,
2016-09-15 01:00:07.000 2s
]

출력: 1

예제2
입력: [
2016-09-15 01:00:04.002 2.0s,
2016-09-15 01:00:07.000 2s
]

출력: 2

설명: 처리시간은 시작시간과 끝시간을 포함하므로
첫 번째 로그는 01:00:02.003 ~ 01:00:04.002에서 2초 동안 처리되었으며,
두 번째 로그는 01:00:05.001 ~ 01:00:07.000에서 2초 동안 처리된다.
따라서, 첫 번째 로그가 끝나는 시점과 두 번째 로그가 시작하는 시점의 구간인 01:00:04.002 ~ 01:00:05.001 1초 동안 최대 2개가 된다.

예제3
입력: [
2016-09-15 20:59:57.421 0.351s,
2016-09-15 20:59:58.233 1.181s,
2016-09-15 20:59:58.299 0.8s,
2016-09-15 20:59:58.688 1.041s,
2016-09-15 20:59:59.591 1.412s,
2016-09-15 21:00:00.464 1.466s,
2016-09-15 21:00:00.741 1.581s,
2016-09-15 21:00:00.748 2.31s,
2016-09-15 21:00:00.966 0.381s,
2016-09-15 21:00:02.066 2.62s
]

출력: 7

설명: 아래 타임라인 그림에서 빨간색으로 표시된 1초 각 구간의 처리량을 구해보면 (1)은 4개, (2)는 7개, (3)는 2개임을 알 수 있다. 따라서 초당 최대 처리량은 7이 되며, 동일한 최대 처리량을 갖는 1초 구간은 여러 개 존재할 수 있으므로 이 문제에서는 구간이 아닌 개수만 출력한다.
Timeline
  */

/**
 * 느낀점 : 왜 3번만 실패하는 걸까? 이해할수가없네
 *
 */

export const augustTraffic = lines => {
  let answer1 = 0;
  let answer2 = 0;
  let list = [];
  let result = [];

  lines.forEach(line => {
    // console.log("---- line : ", line);
    let data = line.split(" ");
    let finishTime = new Date(data[0] + " " + data[1]).getTime();
    let duration = Math.floor(Number(data[2].replace("s", "")) * 1000);
    if (duration === 0) duration = 1;
    if (duration > 3000) duration = 3000;
    let startTime = finishTime - duration + 1;

    // console.log("startTime  : ", startTime, new Date(startTime));
    // console.log("finishTime : ", finishTime, new Date(finishTime));
    // console.log("duration : ", Number(duration));

    const obj = new Object({ startTime, finishTime });
    list.push(obj);
  });

  list.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  list.forEach(line => {
    let removeList = [];
    result.push(line);
    result.forEach(item => {
      console.log(
        item.finishTime,
        " <= ",
        line.startTime - 1000,
        " ? ",
        item.finishTime <= line.startTime - 1000,
        line.startTime - 1000 - item.finishTime,
      );
      if (
        item.finishTime <= line.startTime - 1000 ||
        item.startTime >= line.finishTime + 1000
      ) {
        removeList.push(item);
      }
    });

    removeList.forEach(remove => {
      result.splice(remove, 1);
    });

    answer2 = Math.max(result.length, answer1);
  });

  list.sort((a, b) => {
    return a.finishTime - b.finishTime;
  });

  result = [];
  list.forEach(line => {
    let removeList = [];
    result.push(line);
    result.forEach(item => {
      if (
        item.finishTime <= line.startTime - 1000 ||
        item.startTime >= line.finishTime + 1000
      ) {
        removeList.push(item);
      }
    });

    removeList.forEach(remove => {
      result.splice(remove, 1);
    });

    answer2 = Math.max(result.length, answer2);
  });

  return Math.max(answer1, answer2);
};

/**
 * 
 * 
 문제 설명
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

제한사항
과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
논문별 인용 횟수는 0회 이상 10,000회 이하입니다.
입출력 예
citations	return
[3, 0, 6, 1, 5]	3
입출력 예 설명
이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.
 */

export const hIndex = arr => {
  arr.sort();
  let result = 0;
  let tempResult = 0;
  const MAX_H = Math.max.apply(null, arr);

  for (let i = 1; i <= arr.length; i++) {
    let checkCount = 0;
    arr.forEach(item => {
      if (item >= i) {
        checkCount = checkCount + 1;
      }
    });
    if (checkCount === i) {
      result = Math.max(result, checkCount);
    } else if (checkCount > i && i <= MAX_H) {
      tempResult = Math.max(tempResult, i);
    }
  }

  return result === 0 ? tempResult : result;
};

/**
 * 
 * 스택큐>기능개발
 문제 설명
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

제한 사항
작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
작업 진도는 100 미만의 자연수입니다.
작업 속도는 100 이하의 자연수입니다.
배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.
입출력 예
progresses	speeds	return
[93, 30, 55]	[1, 30, 5]	[2, 1]
[95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]
입출력 예 설명
입출력 예 #1
첫 번째 기능은 93% 완료되어 있고 하루에 1%씩 작업이 가능하므로 7일간 작업 후 배포가 가능합니다.
두 번째 기능은 30%가 완료되어 있고 하루에 30%씩 작업이 가능하므로 3일간 작업 후 배포가 가능합니다. 하지만 이전 첫 번째 기능이 아직 완성된 상태가 아니기 때문에 첫 번째 기능이 배포되는 7일째 배포됩니다.
세 번째 기능은 55%가 완료되어 있고 하루에 5%씩 작업이 가능하므로 9일간 작업 후 배포가 가능합니다.

따라서 7일째에 2개의 기능, 9일째에 1개의 기능이 배포됩니다.

입출력 예 #2
모든 기능이 하루에 1%씩 작업이 가능하므로, 작업이 끝나기까지 남은 일수는 각각 5일, 10일, 1일, 1일, 20일, 1일입니다. 어떤 기능이 먼저 완성되었더라도 앞에 있는 모든 기능이 완성되지 않으면 배포가 불가능합니다.

따라서 5일째에 1개의 기능, 10일째에 3개의 기능, 20일째에 2개의 기능이 배포됩니다.

※ 공지 - 2020년 7월 14일 테스트케이스가 추가되었습니다.
 * 
 * 
 * 느낀점 
 * 풀는데 큰 문제는 없었지만 배열 삭제부분에서 불필요 코드가 생기는 것 같다.
 * 다른사람들은 어떡해 저런 코드로 짤까?
 */
export const devFunction = (prg, spd) => {
  let answer = [];

  while (prg.length > 0) {
    let resultCount = 0;
    let removeList = [];
    // console.log("--------------------");
    for (let index = 0; index < prg.length; index++) {
      // console.log("item : ", prg[index], ", index : ", index);
      prg[index] = prg[index] + spd[index];
      if (prg[index] >= 100) {
        if (index === resultCount) {
          removeList.push(index);
          resultCount = resultCount + 1;
        }
      }
    }

    removeList.forEach((remove, index) => {
      prg.splice(remove - index, 1);
      spd.splice(remove - index, 1);
    });

    if (resultCount > 0) {
      answer[answer.length] = resultCount;
    }
  }
  return answer;
};
