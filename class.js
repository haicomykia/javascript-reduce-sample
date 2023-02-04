class Profie {

    // #をつけるとprivateフィールドを定義できる
    #band = {};

    constructor(band) {
        this.#band = band;
    }

    /**
     * @returns 最年長の年齢
     */
    // メソッドを定義するときはfunctionが不要
    calcMaxAge() {
        return this.#band.reduce((prev, curr) => prev < curr.age ? curr.age : prev, 0);
    }

    /**
     * @returns 最年少の年齢
     */
    calcMinAge() {
        return this.#band.reduce((prev, curr) => prev < curr.age ? prev : curr.age, 120);
    }

    /**
     * @returns 最年少のメンバー
     */
    getMinAgeMember() {
        const minAge = this.calcMinAge();
        return this.#band.find(member => member.age === minAge);
    }

    /**
     * @returns 最年長のメンバー
     */
    getMaxAgeMember() {
        const maxAge = this.calcMaxAge();
        return this.#band.find(member => member.age === maxAge);
    }

    /**
     * getter
     */
    get band() {
        return Object.freeze(this.#band);
    }
}

const kessokuBand = [
    {name: 'Gotoh Hitori', age: 15, part: 'Guitar'},
    {name: 'Kita Ikuyo', age: 16, part: 'Vocal & Guitar'},
    {name: 'Ichiji Nijika', age: 17, part: 'Drums'},
    {name: 'Yamada Ryo', age: 18, part: 'Bass'},
];
Object.freeze(kessokuBand);

let profile = new Profie(kessokuBand);
console.log(profile.getMaxAgeMember());
console.log(profile.getMinAgeMember());

const band = profile.band;
console.table(band);
