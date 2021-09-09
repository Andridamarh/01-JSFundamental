// Day 03 Soal 02

function range(...n) {
  if (n.length === 1) {
    const o = [];
    for (let i = 1; i <= n; i++) {
      o.push(i);
    }
    return o;
  }

  if (n.length === 2){
      const o =[];
      for (let i = n[0]; i < n[1]; i++) {
          o.push(i);
      }
      return o;
  }
}

console.log(range(5,9));
