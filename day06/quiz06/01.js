// Day 06 Soal 01

const students = ["asep", "budi", "charlie", "budi", "jeni", "asep"];
//{asep: 2, budi: 2, charlie: 1, jeni: 1}

function duplicateElement(arrIn) {
  const checkDups = arrIn.reduce((obj, el) => {
    return {
      ...obj,
      [el]: obj[el] ? obj[el] + 1 : 1,
    };
  }, {});

  return checkDups;
}

console.log(duplicateElement(students));
