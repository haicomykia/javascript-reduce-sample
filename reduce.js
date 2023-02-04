'use strict';

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
// ここでのthisは呼び出し元のオブジェクトではなく
// 関数宣言時のthisであるグローバルオブジェクト
// Profiles.prototype.findMaxAgeMember = () => {
//     const maxAge = this.calcMaxAge();
//     return this.band.find((member) => member.age === maxAge);
// }

// functionを使うと、thisは呼び出し元のオブジェクトが参照される
Profiles.prototype.findMaxAgeMember = function() {
    const maxAge = this.calcMaxAge();
    return this.band.find(member => member.age === maxAge);
}

const profile = new Profiles(kessokuBand);
console.log(profile.calcMaxAge());
console.log(profile.calcMinAge());
console.log(profile.findMaxAgeMember());


function test() {
    console.table(this);
}
test(); // this = グローバルオブジェクト
test.call(kessokuBand); // this = 配列 kessokuBand