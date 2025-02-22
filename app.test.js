const isEvenNumber = require('./app');

test('should return "Чётное число" for even days', () => {
    expect(isEvenNumber(2)).toBe("Чётное число");
    expect(isEvenNumber(10)).toBe("Чётное число");
});

test('should return "Нечётное число" for odd days', () => {
    expect(isEvenNumber(1)).toBe("Нечётное число");
    expect(isEvenNumber(15)).toBe("Нечётное число");
});