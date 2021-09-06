function getRandomPassword(inputpass) {
  if (inputpass.length < 6) {
    return `Length must be more than 6`;
  } else if (isNaN(inputpass)) {
    const password =
      inputpass.charAt(Math.random() * inputpass.length) +
      inputpass.charAt(Math.random() * inputpass.length) +
      inputpass.charAt(Math.random() * inputpass.length) +
      inputpass.charAt(Math.random() * inputpass.length) +
      parseInt(Math.random() * inputpass.length) +
      parseInt(Math.random() * inputpass.length) +
      parseInt(Math.random() * inputpass.length) +
      parseInt(Math.random() * inputpass.length);
    return `${password}`;
  } else {
    return `Value Must be a character`;
  }
}

console.log(getRandomPassword("codeid"));
