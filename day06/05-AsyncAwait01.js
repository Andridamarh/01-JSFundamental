// async await

const getNomorAntri = async (nomor) => {
  if (nomor <= 10) {
    return Promise.resolve(nomor);
  } else {
    return Promise.reject("Antrian habis");
  }
};

// console.log(getNomorAntri(10));

getNomorAntri(15)
    .then(res => console.log(res))
    .catch(error => console.log(error));

console.log();