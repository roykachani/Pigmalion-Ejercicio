const nums1 = [1, 4, 3, 9]; //requiredSum = 8 false
const nums2 = [1, 2, 4, 4]; //requiredSum = 8 true
const nums3 = [1, 2, 2, 7]; //requiredSum = 8 true
const nums4 = [2, 2, 4, 4]; //requiredSum = 8 true
const nums5 = [1, 1, 5, 6]; //requiredSum = 8 false
const nums6 = [1, 4, 5, 6]; //requiredSum = 8 false
const nums7 = [1, 3, 4, 5, 6, 7, 4, 5, 8, 11]; //requiredSum = 8 true

/* 1- Un algoritmo que resuelva el problema asumiendo que la máquina en donde va a correrse
el programa tiene recursos infinitos, que el tiempo de ejecución no importa y que lo más
importante es realizar el desarrollo en el menor tiempo posible.*/

const isValidSum = (arr, totalSum) => {
  let result;
  for (let j = 0; j <= arr.length; j++) {
    //1
    for (let i = 0; i <= arr.length; i++) {
      if (j === i) i++;
      result = arr[j] + arr[i];
      // console.log(arr[j],arr[i])
      if (result === totalSum) return true;
    }
  }
  return false;
};

console.time('isValidSum');
console.log(isValidSum(nums7, 8));
console.timeEnd('isValidSum'); //tiempo de ejecucion

/* */
console.log('------');
/* */

/* 2- Un algoritmo que resuelva el problema asumiendo que los recursos son un bien preciado,
que el tiempo de ejecución si importa y que el tiempo de desarrollo no es importante.*/

const isValid = (arr, totalSum) => {
  return arr.some((el, i) => arr.slice(i + 1).includes(totalSum - el));
};

console.time('isValid');
console.log(isValid(nums7, 8));
console.timeEnd('isValid'); //tiempo de ejecucion
