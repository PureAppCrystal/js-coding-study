//

// 배열 첫번째 빼기
export const getFirstArray = arr => {
  return arr.shift();
};

// 배열 첫번째에 넣기
export const setFirstArray = (arr, value) => {
  arr.unshift(value);
  return arr;
};

// 배열 마지막 빼기
export const getLastArray = arr => {
  return arr.pop();
};

// 배열 마지막 넣기
export const setLastArray = (arr, value) => {
  arr.push(value);
  return arr;
};

// 배열 오름차순 정렬
export const sortAsc = arr => {
  return arr.sort((a, b) => {
    return a - b;
  });
};

// 배열 내림차순 정렬
export const sortDesc = arr => {
  return arr.sort((a, b) => {
    return b - a;
  });
};

// 배열 가장 큰수 찾기
export const getBiggest = arr => {
  return Math.max.apply(null, arr);
};

// 배열 가장 작은수 찾기
export const getSmallest = arr => {
  return Math.min.apply(null, arr);
};

// 배열 총합 구하기
export const getSumAll = arr => {
  return arr.reduce((sum, currValue) => {
    return sum + currValue;
  }, 0);
};

// 배열 평균 구하기
export const getAverage = arr => {
  const result = arr.reduce((sum, currValue) => {
    return sum + currValue;
  }, 0);
  return result / arr.length;
};

// 중복값 제거
export const getOnlyUnique = arr => {
  return Array.from(new Set(arr));
};

// 중복값 찾기
export const getDuplicate = arr => {
  let result = [];
  arr = sortAsc(arr);
  arr.forEach((item, index) => {
    if (result.indexOf(item) >= 0) return true;
    let tempArr = arr.slice(index + 1, arr.length);
    if (tempArr.indexOf(item) >= 0) {
      result.push(item);
    }
  });
  return result;
};

// 전체검색
export const getScanAll = (arr, target) => {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      result = i;
    }
  }
  return result;
};

// 이진탐색
export const getScanBinary = (arr, target) => {
  let startNum = 0;
  let lastNum = arr.length;

  arr = sortAsc(arr);
  do {
    let count = Math.floor((startNum + lastNum) / 2);
    console.log("count : ", count);
    if (arr[count] === target) {
      return count;
    } else if (arr[count] < target) {
      startNum = count + 1;
    } else {
      lastNum = count - 1;
    }
  } while (startNum < lastNum);

  return -1;
};
