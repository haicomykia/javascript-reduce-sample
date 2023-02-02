const kessokuBand = [
    {name: 'Gotoh Hitori', age: 15, part: 'Guitar'},
    {name: 'Kita Ikuyo', age: 16, part: 'Vocal & Guitar'},
    {name: 'Ichiji Nijika', age: 17, part: 'Drums'},
    {name: 'Yamada Ryo', age: 18, part: 'Bass'},
];

console.table(kessokuBand);

const total = kessokuBand.reduce((prev, curr) => {
    return prev > curr.age ? prev : curr.age
});

console.log(`max age : ${total}`);