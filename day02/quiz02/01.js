// Day 02 Soal 01

function strToDate(inputDate) {
  const dateConv = inputDate.split("/");
  const month = dateConv[0];
  const day = dateConv[1];
  const year = dateConv[2];

  const dateOutput = new Date(`${year}-${month}-${day}T00:00:00`);

  if (isNaN(dateOutput.getTime())) {
    return `${inputDate} bad format date`;
  }

  return dateOutput;
}

console.log(strToDate("12/30/2021"));
