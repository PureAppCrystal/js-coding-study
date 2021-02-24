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

/**
 * 
 * 
프린터
문제 설명
일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다. 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.

1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.
예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.

내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.

현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.

제한사항
현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.
입출력 예
priorities	location	return
[2, 1, 3, 2]	2	1
[1, 1, 9, 1, 1, 1]	0	5
입출력 예 설명
예제 #1

문제에 나온 예와 같습니다.

예제 #2

6개의 문서(A, B, C, D, E, F)가 인쇄 대기목록에 있고 중요도가 1 1 9 1 1 1 이므로 C D E F A B 순으로 인쇄합니다.

느낀점
처음에는 답도 없었따. 포기할까 하다가
노트에 그리고 하나씩 해결하다가 해결했다.

 */
export const printer = (list, target) => {
  let resultList = JSON.parse(JSON.stringify(list));
  resultList[target] = "key";
  let MAX_VALUE = Math.max.apply(null, list);

  let deleteKey = "";
  let deleteCount = 0;
  while (deleteKey !== "key") {
    if (list[0] < MAX_VALUE) {
      list.push(list.shift());
      resultList.push(resultList.shift());
    } else {
      list.shift();
      deleteKey = resultList.shift();
      deleteCount = deleteCount + 1;
      MAX_VALUE = Math.max.apply(null, list);
    }
  }

  return deleteCount;
};

/**
 * 
 * 
 * 
 2021 카카오블라인드채용> 신규 아이디 추천
 
 카카오에 입사한 신입 개발자 네오는 카카오계정개발팀에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. 네오에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다.
다음은 카카오 아이디의 규칙입니다.

아이디의 길이는 3자 이상 15자 이하여야 합니다.
아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.
네오는 다음과 같이 7단계의 순차적인 처리 과정을 통해 신규 유저가 입력한 아이디가 카카오 아이디 규칙에 맞는 지 검사하고 규칙에 맞지 않은 경우 규칙에 맞는 새로운 아이디를 추천해 주려고 합니다.
신규 유저가 입력한 아이디가 new_id 라고 한다면,

1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
     만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
예를 들어, new_id 값이 ...!@BaT#*..y.abcdefghijklm 라면, 위 7단계를 거치고 나면 new_id는 아래와 같이 변경됩니다.

1단계 대문자 'B'와 'T'가 소문자 'b'와 't'로 바뀌었습니다.
"...!@BaT#*..y.abcdefghijklm" → "...!@bat#*..y.abcdefghijklm"

2단계 '!', '@', '#', '*' 문자가 제거되었습니다.
"...!@bat#*..y.abcdefghijklm" → "...bat..y.abcdefghijklm"

3단계 '...'와 '..' 가 '.'로 바뀌었습니다.
"...bat..y.abcdefghijklm" → ".bat.y.abcdefghijklm"

4단계 아이디의 처음에 위치한 '.'가 제거되었습니다.
".bat.y.abcdefghijklm" → "bat.y.abcdefghijklm"

5단계 아이디가 빈 문자열이 아니므로 변화가 없습니다.
"bat.y.abcdefghijklm" → "bat.y.abcdefghijklm"

6단계 아이디의 길이가 16자 이상이므로, 처음 15자를 제외한 나머지 문자들이 제거되었습니다.
"bat.y.abcdefghijklm" → "bat.y.abcdefghi"

7단계 아이디의 길이가 2자 이하가 아니므로 변화가 없습니다.
"bat.y.abcdefghi" → "bat.y.abcdefghi"

따라서 신규 유저가 입력한 new_id가 ...!@BaT#*..y.abcdefghijklm일 때, 네오의 프로그램이 추천하는 새로운 아이디는 bat.y.abcdefghi 입니다.

[문제]
신규 유저가 입력한 아이디를 나타내는 new_id가 매개변수로 주어질 때, 네오가 설계한 7단계의 처리 과정을 거친 후의 추천 아이디를 return 하도록 solution 함수를 완성해 주세요.

[제한사항]
new_id는 길이 1 이상 1,000 이하인 문자열입니다.
new_id는 알파벳 대문자, 알파벳 소문자, 숫자, 특수문자로 구성되어 있습니다.
new_id에 나타날 수 있는 특수문자는 -_.~!@#$%^&*()=+[{]}:?,<>/ 로 한정됩니다.

[입출력 예]
no	new_id	result
예1	"...!@BaT#*..y.abcdefghijklm"	"bat.y.abcdefghi"
예2	"z-+.^."	"z--"
예3	"=.="	"aaa"
예4	"123_.def"	"123_.def"
예5	"abcdefghijklmn.p"	"abcdefghijklmn"
입출력 예에 대한 설명
입출력 예 #1
문제의 예시와 같습니다.

입출력 예 #2
7단계를 거치는 동안 new_id가 변화하는 과정은 아래와 같습니다.

1단계 변화 없습니다.
2단계 "z-+.^." → "z-.."
3단계 "z-.." → "z-."
4단계 "z-." → "z-"
5단계 변화 없습니다.
6단계 변화 없습니다.
7단계 "z-" → "z--"

입출력 예 #3
7단계를 거치는 동안 new_id가 변화하는 과정은 아래와 같습니다.

1단계 변화 없습니다.
2단계 "=.=" → "."
3단계 변화 없습니다.
4단계 "." → "" (new_id가 빈 문자열이 되었습니다.)
5단계 "" → "a"
6단계 변화 없습니다.
7단계 "a" → "aaa"

입출력 예 #4
1단계에서 7단계까지 거치는 동안 new_id(123_.def)는 변하지 않습니다. 즉, new_id가 처음부터 카카오의 아이디 규칙에 맞습니다.

입출력 예 #5
1단계 변화 없습니다.
2단계 변화 없습니다.
3단계 변화 없습니다.
4단계 변화 없습니다.
5단계 변화 없습니다.
6단계 "abcdefghijklmn.p" → "abcdefghijklmn." → "abcdefghijklmn"
7단계 변화 없습니다.


느낀점
정규식에 대한 문법을 너무 몰랐다.
이걸 풀면서 조금이나마 공부가 되었다.
잊지않게 꾸준히 사용해야할 것 같다.
 */

export const newId = newId => {
  let answer = "";
  console.log("newId : ", newId);
  answer = newId;
  // 1단계 : 대문자 소문자로
  answer = answer.toLowerCase();
  console.log("answer1 : ", answer);

  // 2단계 : 문자유효성 체크
  // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
  let reg = /[^a-zA-Z0-9\-\\_\\.\\s]/g;
  answer = answer.replace(reg, "");
  console.log("answer2 : ", answer);

  // reg = new RegExp("\\1\\.{2,}", "gi");
  //3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  reg = /\.+/g;
  answer = answer.replace(reg, ".");
  console.log("answer3 : ", answer);

  // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
  reg = /^\.*|\.$/g;
  answer = answer.replace(reg, "");
  console.log("answer4 : ", answer);

  //  5단계 : 3자리 체크
  if (answer.length === 0) {
    answer = "a";
    console.log("answer5 : ", answer);
  } else if (answer.length > 15) {
    // 6단계 : 15자 이상체크
    answer = answer.substr(0, 15);
    reg = /^\.*|\.$/g;
    answer = answer.replace(reg, "");
    console.log("answer6 : ", answer);
  }

  // 7단계 2개 이하

  while (answer.length < 3) {
    answer = answer + answer.substr(answer.length - 1, 1);
  }

  return answer;
};

/**
 *  모범답안
  const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
 */

/**
  * 
  2020 카카오블라인드 > 문자열압축
  카카오
  문제 설명
데이터 처리 전문가가 되고 싶은 어피치는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다. 최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.
간단한 예로 aabbaccc의 경우 2a2ba3c(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)와 같이 표현할 수 있는데, 이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다. 예를 들면, abcabcdede와 같은 문자열은 전혀 압축되지 않습니다. 어피치는 이러한 단점을 해결하기 위해 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.

예를 들어, ababcdcdababcdcd의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 2ab2cd2ab2cd로 표현할 수 있습니다. 다른 방법으로 8개 단위로 잘라서 압축한다면 2ababcdcd로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.

다른 예로, abcabcdede와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 abcabc2de가 되지만, 3개 단위로 자른다면 2abcdede가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다. 이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.

압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.

제한사항
s의 길이는 1 이상 1,000 이하입니다.
s는 알파벳 소문자로만 이루어져 있습니다.
입출력 예
s	result
"aabbaccc"	7  
"ababcdcdababcdcd"	9
"abcabcdede"	8
"abcabcabcabcdededededede"	14
"xababcdcdababcdcd"	17
입출력 예에 대한 설명
입출력 예 #1

문자열을 1개 단위로 잘라 압축했을 때 가장 짧습니다.

입출력 예 #2

문자열을 8개 단위로 잘라 압축했을 때 가장 짧습니다.

입출력 예 #3

문자열을 3개 단위로 잘라 압축했을 때 가장 짧습니다.

입출력 예 #4

문자열을 2개 단위로 자르면 abcabcabcabc6de 가 됩니다.
문자열을 3개 단위로 자르면 4abcdededededede 가 됩니다.
문자열을 4개 단위로 자르면 abcabcabcabc3dede 가 됩니다.
문자열을 6개 단위로 자를 경우 2abcabc2dedede가 되며, 이때의 길이가 14로 가장 짧습니다.

입출력 예 #5

문자열은 제일 앞부터 정해진 길이만큼 잘라야 합니다.
따라서 주어진 문자열을 x / ababcdcd / ababcdcd 로 자르는 것은 불가능 합니다.
이 경우 어떻게 문자열을 잘라도 압축되지 않으므로 가장 짧은 길이는 17이 됩니다.


느낀점
전체 반복하면서 체크하면 되는 부분이라 난이도는 쉬운 것 같음
다만 코드를 간결하게 코딩하지 못한게 아쉬움
다른사람들의 코딩에는 압축이라는 메서드를 만들어서 개발한게 보임.

  */
export const stringZip = str => {
  let answer = str.length;
  // console.log("str : ", str);

  let cut = 0;
  while (cut <= str.length) {
    cut = cut + 1;
    let start = 0;
    let finish = cut;
    let result = 0;

    let findIndex = 1;
    do {
      console.log("------------------");
      let temp1 = str.slice(start, finish);
      start = start + cut;
      finish = finish + cut;
      let temp2 = str.slice(start, finish);
      // console.log("cut : ", cut);
      // console.log("temp1 : ", temp1);
      // console.log("temp2 : ", temp2);

      if (temp1 === temp2) {
        findIndex = findIndex + 1;
      } else {
        // console.log("findIndex : ", findIndex);

        const text = (findIndex > 1 ? findIndex : "") + temp1;
        console.log("text : ", text);

        result = result + text.length;
        findIndex = 1;
      }
      // console.log("while : ", str.length - finish);
    } while (str.length - finish + cut >= 0);
    console.log("result : ", result);
    // console.log("answer : ", answer);
    answer = Math.min(answer, result);
  }

  return answer;
};
