function fareinheitTokelvin(fareinheit) {
  if (isNaN(fareinheit)) {
    return `fareinheit must be a number`;
  }

  const kelvin = parseInt((fareinheit + 459.67) / 1.8);

  return `Convert fareinheit (${fareinheit}) to Kelvin = ${kelvin}`;
}

console.log(fareinheitTokelvin(45));
