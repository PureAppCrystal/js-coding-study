/* eslint-disable no-unused-vars */

/**
 *
 * 2020-02-21 r서포트
 *
 */
/**
 * Q1
 문제 설명
계좌 개설, 입금, 출금을 처리하는 은행 서버를 구현하려 합니다. 은행 서버는 들어온 요청을 처리한 후, 요청을 처리한 방법에 따라 상태 코드를 보내주어야 합니다. 서버에 들어오는 요청과 보낼 상태 코드는 다음과 같습니다.

계좌 개설 요청: CREATE 계좌아이디 최대한도
이미 개설된 계좌라면 403 코드를 보냅니다.
개설되지 않은 계좌라면 -최대한도까지 출금할 수 있는 계좌를 개설한 후, 200 코드를 보냅니다.
입금 요청: DEPOSIT 계좌아이디 금액
없는 계좌라면 404 코드를 보냅니다.
있는 계좌라면 금액 만큼을 입금한 후 200 코드를 보냅니다.
출금 요청: WITHDRAW 계좌아이디 금액
없는 계좌라면 404 코드를 보냅니다.
계좌가 있지만, 최대한도를 초과한다면 출금을 하지 않고 403 코드를 보냅니다.
그 외의 경우 계좌에서 금액 만큼을 출금 후 200 코드를 보냅니다.
이때 서버로 들어온 요청에 대해 각각 어떤 코드를 보내야 하는지 알아보려 합니다. 예를 들어 다음과 같은 요청이 들어왔습니다.

DEPOSIT 3a 10000
CREATE 3a 300000
WITHDRAW 3a 150000
WITHDRAW 3a 150001
위 요청은 다음과 같이 처리합니다.

들어온 요청	처리 결과	3a번 계좌 상태
DEPOSIT 3a 10000	3a번 계좌가 없으므로 404 코드를 보냅니다.	아직 계좌가 없음
CREATE 3a 300000	최대한도가 -300,000원인 계좌를 개설합니다. 200 코드를 보냅니다.	계좌가 생성됨. 잔액 0원
WITHDRAW 3a 150000	3a번 계좌에서 150,000원을 출금합니다. 200 코드를 보냅니다.	잔액 -150,000원
WITHDRAW 3a 150001	3a번 계좌의 최대한도를 초과하는 요청이므로 403 코드를 보냅니다.	잔액 -150,000원
따라서 이때에는 각 요청에 대해 [404, 200, 200, 403] 코드를 보내야 합니다.

서버로 들어온 요청을 담은 배열 reqs가 주어질 때 각 요청에 대해 어떤 코드를 보내야 하는지 return 하도록 solution 함수를 작성해주세요.

제한 사항
reqs의 길이는 1 이상 100,000 이하입니다.
reqs의 원소는 명령어 계좌아이디 숫자 형식입니다.
명령어는 CREATE, DEPOSIT, WITHDRAW 중 하나입니다.
계좌아이디는 영문 소문자와 숫자로 구성된, 길이 1 이상 30 이하인 문자열입니다.
숫자는 1 이상 1,000,000 이하인 자연수입니다.
입출력 예
reqs	result
["DEPOSIT 3a 10000", "CREATE 3a 300000", "WITHDRAW 3a 150000", "WITHDRAW 3a 150001"]	[404, 200, 200, 403]
["CREATE 3a 10000", "CREATE 3a 20000", "CREATE 2bw 30000"]	[200, 403, 200]
입출력 예 설명
입출력 예 #1

앞서 설명한 예와 같습니다.

입출력 예 #2

들어온 요청	처리 결과
CREATE 3a 10000	-10,000 만큼 출금할 수 있는 계좌를 개설합니다. 200 코드를 보냅니다.
CREATE 3a 20000	이미 3a번 계좌가 있으므로 403 코드를 보냅니다.
CREATE 2bw 30000	-30,000 만큼 출금할 수 있는 계좌를 개설합니다. 200 코드를 보냅니다.
따라서 [200, 403, 200]을 리턴해야 합니다.


결과
실행성공
효율성 0개통과

느낀점
처음 문제이해가 되어 코딩속도는 빨랐다.
하지만 실행결과 실페에서 원인을 찾지 못했고 Number로 인해 해결했다.
하지만 class를 사용하면서 속도개선을 하지못해 효율성은 0점이다.

 */
export const Q1 = reqs => {
  let result = -1;
  console.log("reqs : ", reqs);
  let accountList = [];
  let resultList = [];

  reqs.forEach(req => {
    let request = req.split(" ");
    console.log("request : ", request);

    // let account = findAccount(accountList, request[1]);
    let startTime = new Date();
    let account = accountList.find(item => item.getId() === request[1]);
    let finishTime = new Date();
    console.log(
      "#### search duration : ",
      finishTime.getTime() - startTime.getTime(),
    );

    account = account === undefined ? null : account;
    console.log("account : ", account);
    switch (request[0]) {
      case "DEPOSIT":
        if (account !== null) {
          resultList.push(account.setMoney(request[2]));
        } else {
          resultList.push(NOT_FOUND);
        }
        break;
      case "CREATE":
        if (account !== null) {
          resultList.push(ALREADY_EXIST);
        } else {
          accountList.push(new Account(request[1], 0, request[2]));
          resultList.push(SUCCESS);
        }
        break;
      case "WITHDRAW":
        if (account === null) {
          resultList.push(NOT_FOUND);
        } else {
          resultList.push(account.getMoney(request[2]));
        }
        break;
      default:
        console.log("UNKONW REQUEST");
    }
  });

  return resultList;
};
const findAccount = (list, id) => {
  let returnValue = null;
  list.some(account => {
    if (account.id === id) {
      console.log("account : ", account);
      returnValue = account;
      return true;
    }
  });
  return returnValue;
};
const SUCCESS = 200;
const ALREADY_EXIST = 403;
const NOT_FOUND = 404;
const OVER_LIMIT = 403;

class Account {
  constructor(id, money, minMoney) {
    this.id = id;
    this.money = 0;
    this.minMoney = 0 - minMoney;
  }

  getId = function() {
    return this.id;
  };

  setMoney = function(money) {
    this.money = this.money + Number(money);
    return SUCCESS;
  };

  getMoney = function(money) {
    if (this.minMoney > this.money - money) {
      // if (this.money < money) {
      return OVER_LIMIT;
    } else {
      this.money = this.money - money;
      return SUCCESS;
    }
  };
}

/**
 * Q2
 

 유저가 주문한 음식 데이터를 이용해 음식을 가장 다양하게 주문한 유저는 누구인지 알아보려 합니다. 유저는 주문 한 번당 음식 여러 종류를 주문하며, 같은 음식을 여러 번 주문할 수도 있습니다.

예를 들어 음식 주문 데이터가 다음과 같은 경우

["alex pizza pasta", "alex pizza pizza", "alex noodle", "bob pasta", "bob noodle sandwich pasta", "bob steak noodle"]

alex는 pizza, pasta, noodle을 주문했습니다.
bob은 pasta, noodle, sandwich, steak를 주문했습니다.
따라서 bob이 주문한 음식이 총 네 종류로 가장 많습니다.

유저 ID와 각 유저가 주문한 음식이 문자열 형태로 들어있는 배열 orders가 매개변수로 주어질 때, 가장 많은 종류의 음식을 주문한 유저의 아이디를 배열에 담아 return 하도록 solution 함수를 완성해주세요. 만약, 그런 유저가 여러 명이면 해당 유저들을 오름차순으로 정렬해 return 하면 됩니다.

제한사항
1 ≤ orders의 길이 ≤ 200000
orders의 원소는 음식 주문 데이터가 유저ID 음식1 음식2 ... 순서로 들어있습니다.
유저는 한 번에 최대 5개까지 음식을 주문합니다.
유저 ID와 음식 이름은 공백(스페이스 바) 하나로 구분해서 주어집니다.
음식과 음식도 공백(스페이스 바) 하나로 구분해서 주어집니다.
유저 ID와 음식 이름은 길이가 1 이상 10 이하인 문자열이며, 알파벳 소문자로만 이루어져 있습니다.
입출력 예
orders	result
["alex pizza pasta", "alex pizza pizza", "alex noodle", "bob pasta", "bob noodle sandwich pasta", "bob steak noodle"]	["bob"]
["alex pizza pasta steak", "bob noodle sandwich pasta", "choi pizza sandwich pizza", "alex pizza pasta steak"]	["alex", "bob"]
입출력 예 설명
입출력 예 #1
문제 예시와 같습니다.

입출력 예 #2

alex와 bob은 음식 세 종류를 주문했으며, choi는 두 종류를 주문했습니다. 따라서 오름차순 정렬하여 ["alex", "bob"]을 return하면 됩니다.

결과

실행결과 성공
효율성 50% 성공 (2/4)

느낀점

너무 급했다. 구현하기 위해 코드 효율을 생각 못했다.

 */
export const Q2 = orders => {
  let list = [];
  let resultList = [];

  orders.forEach(order => {
    console.log("order : ", order);
    let menus = order.split(" ");
    let name = menus[0];

    let people = list.find(item => {
      return item[0] === name;
    });
    if (people !== undefined) {
      menus.forEach(menu => people.push(menu));
    } else {
      list.push(menus);
    }
  });

  list = list.map(item => {
    return Array.from(new Set(item));
  });

  list.sort((a, b) => {
    return b.length - a.length;
  });
  console.log("list : ", list);

  const maxCount = list[0].length;
  list.some(item => {
    if (item.length === maxCount) resultList.push(item[0]);
    if (item.length < maxCount) return true;
    console.log("item : ", item);
  });

  resultList.sort();
  return resultList;
};

/**
 * Q3
 N x N 크기의 정사각형 격자로 이루어진 도시가 있습니다. 도시에는 서로 다른 격자 칸에 버스 정류장이 있습니다. 이때, 도시의 모든 격자 칸에 대해 가장 가까운 정류장과의 거리를 계산하려 합니다. 각 칸에서는 상, 하, 좌, 우로만 움직일 수 있으며, 한 칸 이동하는데 거리 1로 계산합니다.

다음은 N = 3이고, 1행 2열에 정류장 한 개가 있는 예시입니다.

1_aman5o.png

이때, 다음과 같이 이동하면 각 위치에서 정류장까지 가장 짧은 거리로 이동할 수 있습니다.

2_ombbkl.png

위와 같이 움직였을 때, 각 위치에서 가장 가까운 정류장까지 거리는 다음과 같습니다.

3_minsjl.png

(정류장이 있는 위치에서는 정류장과의 거리가 0입니다)

도시의 크기 N, 정류장의 위치 정보 bus_stop이 매개변수로 주어질 때, 도시 내 모든 위치에 대해 가장 가까운 정류장과의 거리를 구해 N x N 크기의 2차원 배열에 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
N은 1 이상 600 이하의 정수입니다.
bus_stop은 2차원 배열로, 행 길이는 1 이상 N2 이하이며 열 길이는 항상 2 입니다.
bus_stop의 각 행은 버스 정류장의 위치가 [행 번호, 열 번호] 순으로 들어있습니다.
동일한 버스 정류장 위치가 중복해 주어지지 않습니다.
버스 정류장의 행 번호, 열 번호는 1 이상 N 이하의 자연수로만 이루어져 있습니다.
입출력 예
N	bus_stop	result
3	[[1,2]]	[[1,0,1],[2,1,2],[3,2,3]]
3	[[1,2],[3,3]]	[[1,0,1],[2,1,1],[2,1,0]]
입출력 예 설명
입출력 예 #1
문제 설명에서의 예시와 같습니다.

입출력 예 #2
4_o7rqai.png
위와 같이 이동하면 각 칸에서 정류장까지 최단거리로 이동할 수 있으며, 그때 각 칸에서 가장 가까운 정류장까지의 거리는 다음과 같습니다.

5_pyxoaz.png
 */
export const Q3 = (n, busStop) => {
  let result = -1;
  console.log("n : ", n);
  console.log("busStop : ", busStop);

  console.log("result : ", result);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //
    }
  }

  return result;
};

/**
 * Q4
 
 */
export const Q4 = () => {
  let result = -1;
  // console.log("aaaa : ", b);

  return result;
};
