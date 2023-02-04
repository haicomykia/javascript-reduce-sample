const kessokuBand = [
    {name: 'Gotoh Hitori', age: 15, part: 'Guitar'},
    {name: 'Kita Ikuyo', age: 16, part: 'Vocal & Guitar'},
    {name: 'Ichiji Nijika', age: 17, part: 'Drums'},
    {name: 'Yamada Ryo', age: 18, part: 'Bass'},
];

function Profiles(kessokuBand) {
    this.band = kessokuBand;
    Object.freeze(this);
} 

Profiles.prototype.calcMaxAge = function() {
    return this.band.reduce((prev, curr) => prev > curr.age ? prev : curr.age, 0);
}

Profiles.prototype.calcMinAge = function () {
    return this.band.reduce((prev, curr) => prev > curr.age ? curr.age : prev, 120);
}

Profiles.prototype.consoleTable = function () {
    console.table(this.band);
}

// アロー関数を使うべきでない例
// ここでのthisは呼び出し元のオブジェクトではない
// Profiles.prototype.sum = () => {
//     return this.band.reduce((prev, curr) => prev + curr.age, 0);
// }

// functionを使って宣言するとthisは呼び出し元のオブジェクトを指す
Profiles.prototype.sum = function() {
    return this.band.reduce((prev, curr) => prev + curr.age, 0);
}

const profile = new Profiles(kessokuBand);
console.log(profile.calcMaxAge());
console.log(profile.calcMinAge());
profile.consoleTable();

console.log(profile.sum());