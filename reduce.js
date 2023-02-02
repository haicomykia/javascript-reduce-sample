const kessokuBand = [
    {name: 'Gotoh Hitori', age: 15, part: 'Guitar'},
    {name: 'Kita Ikuyo', age: 16, part: 'Vocal & Guitar'},
    {name: 'Ichiji Nijika', age: 17, part: 'Drums'},
    {name: 'Yamada Ryo', age: 18, part: 'Bass'},
];

console.table(kessokuBand);

// 最年少を求める
const total = kessokuBand.reduce((prev, curr) => prev < curr.age ? prev : curr.age, 120);

console.log(`max age : ${total}`);