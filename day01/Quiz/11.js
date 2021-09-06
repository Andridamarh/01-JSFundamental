function getHeavier(w1, w2, w3) {
  if (w1 >= w2 && w1 >= w3) {
    return `${w1}`;
  } else if (w2 >= w3) {
    return `${w2}`;
  } else {
    return `${w3}`;
  }
}

console.log(getHeavier(30, 9, 10));
