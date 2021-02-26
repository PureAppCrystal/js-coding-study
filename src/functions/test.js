/* eslint-disable no-unused-vars */

export const test1 = () => {
  let answer = "";

  console.log("----------");
  let obj = new Test(14, 24);
  console.log(obj.value);
  console.log(obj.value2);
  obj.value = 15;
  console.log(obj.value);

  console.log("----------");
  let obj2 = new Exam(14, 15);
  console.log(obj2.value);
  console.log(obj2.value2);
  obj2.value = 15;
  console.log(obj2.value);
  obj2.value2 = 25;
  console.log(obj2.value2);
  obj2.q1 = 10;
  console.log(obj2.q1);
  obj2.a1 = 10;
  console.log(obj2.a1);
  // 상속 받았는데 protected private 둘다 읽기/쓰기가 되네?
  const _a = 10;
  console.log("a : ", _a);
  //const #a = 20; // # 가 private 로 인식은된다.
};

class Test {
  #value;
  _value2;
  constructor(value, value2) {
    this.#value = value;
    this._value2 = value2;
  }

  get value() {
    return this.#value;
  }
  set value(input) {
    this.#value = input;
  }

  get value2() {
    return this._value2;
  }
  set value2(input) {
    this._value2 = input;
  }
}

class Exam extends Test {
  q1;
  #a1;
  //   constructor() {
  // this.#value = val1;
  // this._value2 = val2;
  //   }
}

export const test2 = arr => {
  // let arr = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }];

  let temp = arr.pop();
  console.log("arr : ", arr);
  console.log("temp : ", temp);

  arr.push(temp);
  arr.push(temp);
  console.log("arr : ", arr);
  console.log("temp : ", temp);
};
