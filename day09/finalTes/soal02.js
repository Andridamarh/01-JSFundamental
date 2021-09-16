// Final Tes soal 02
const arr = [3, 8, 9, 7, 6];

function rotateArr(array, k) {
  let arrOut1 = [...array];
  let str = "";

  for (let i = 1; i <= k; i++) {
    let arrOut2 = [...arrOut1.slice(-1), ...arrOut1.slice(0, -1)];
    str = str + `[${arrOut1}] => [${arrOut2}]\n`;
    arrOut1 = arrOut2;
  }

  return str;
}

console.log(rotateArr(arr, 3));
