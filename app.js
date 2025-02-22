function isEvenNumber(day) {
    return day % 2 === 0 ? "Чётное число" : "Нечётное число";
}

console.log(isEvenNumber(new Date().getDate()));

module.exports = isEvenNumber;