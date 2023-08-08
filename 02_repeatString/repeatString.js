const repeatString = function (word, times) {
    if (times < 0) {
        return "ERROR";
    }
    let string = "";
    for (let i = 0; i < times; i++) {
        string += word;
    }
    return string;
}
const number = Math.floor(Math.random() * 1000);
repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);
(repeatString('hey', number).match(/((hey))/g).length);
repeatString('', 10);
// Do not edit below this line
module.exports = repeatString;
