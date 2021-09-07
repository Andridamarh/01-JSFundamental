// declaration date
const today = new Date();
console.log(today.getDay());//Su-Sat, 0-6
console.log(today.getMonth());//Jan-Dec, 0-11
console.log(today.getFullYear());

// get info time
const hours = today.getHours();
const minute = today.getMinutes();
const seconds = today.getSeconds();

console.log(`Jam ${hours}:${minute}:${seconds}`);

// declaration date with argument
const tomorrow = new Date(2021,8,8);
console.log(tomorrow);

// declaration date with time
const eventDate = new Date("2021-08-12T03:13:00Z");
console.log(eventDate);

// adding date
const now = new Date();
// const currentDate = now.getDate();
now.setDate(now.getDate()+4);
console.log(`booking date : ${now}`);

// date time format Indonesia
console.log(`Format Date : ${new Intl.DateTimeFormat(`id-ID`).format(now)}`);

// compare between date
const startDate = new Date(2021,8,7);
const endDate = new Date(2021,8,10);

const selisihDate = endDate - startDate;

console.log(`Selisih date : ${selisihDate}`);

if (endDate > startDate){
    console.log(`${endDate} > ${startDate}`);
}

const millisPerDay = 1000 * 60 * 60 * 24;
let countDay = selisihDate / millisPerDay;
console.log(countDay);

