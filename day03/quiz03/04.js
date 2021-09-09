const products = `LG,Asus 5432,Mix For Youtuber,Bluetooth Adapter,Solo Leveling Webtoon,Panasoni,Air Conditioner,Karaoke,Bazooka,PowerBank 24 Hours,Backpack ofHolding,Game Box 5,Universal Gadget,Charger USB,Squirming Tentacle USB,Fishquarium,Intel Processor 8 core,SpaceBarKeyboardOrganizer,USB Hub,Pop USB,Pet Rock,Powerstation 5,Dual Heated,Travel Mug,Crosley Collegiate,Portable USB,Turntable,Hoodie,AK-47`;
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// a

function filterProduct(inputArr, inputChar) {
  const arrConvert = inputArr.split(",").sort();
  const outArr = [];

  for (let i = 0; i < arrConvert.length; i++) {
    if (arrConvert[i][0] === inputChar) {
      outArr.push(arrConvert[i]);
    }
  }

  return outArr;
}

console.log(filterProduct(products, "A"));
console.log(filterProduct(products, "S"));

// b

function printArr(inputArr) {
  const arrConvert = inputArr.split(",").sort();
  let str = "";

  for (let j = 0; j < alphabets.length; j++) {
    str = str + "\n\n======" + alphabets[j] + "======";
    for (let i = 0; i < arrConvert.length; i++) {
      if (arrConvert[i][0] === alphabets[j]) {
        str = str + "\n" + arrConvert[i];
      }
    }
  }

  return str;
}

console.log(printArr(products));

