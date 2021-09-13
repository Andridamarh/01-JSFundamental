// async await

const getNomorAntri = (nomor) => {
  return nomor;
};

const pilihPaket = (nomor, paket) => {
  if (nomor <= 0 && isNaN(nomor)) {
    return "Silahkan antri";
  }

  if (paket === "A") {
    return "KFC Paket A";
  } else {
    return "KFC Paket B";
  }
};

const orderKFC = async (paket) => {
  const nomorAntri = await getNomorAntri(10);
  const menu = await pilihPaket(nomorAntri, paket);
  return [nomorAntri, menu];
};

orderKFC("A").then((res) => console.log(res));

const tagihan = (paket) => {
  if (paket === "A") {
    return 25000;
  } else {
    return 24000;
  }
};

// await dengan promise all

const orderKFC2 = async (paket) => {
  const [nomorAntri, menu, total] = await Promise.all([
    getNomorAntri(10),
    pilihPaket(10, paket),
    tagihan(paket),
  ]);
  return [nomorAntri, menu, total];
};

orderKFC2("B").then((res) => console.log(res));

console.log();