const tour = require('../modules/tour-list');

const testTour_1 = new tour('test-tour-1', [5, 5, 5, 5, 5, 5, 5, 5, 5, 5])
const testTour_2 = new tour('test-tour-2', [53, 15, 43, 34, 45, 54, 12, 9, 12, 12])
const testTour_3 = new tour('test-tour-3', [32, 23, 11, 21, 65, 45, 23, 12, 23, 8])
const testTour_4 = new tour('test-tour-4', [45, 45, 76, 37, 23, 34, 3, 14, 34, 45])

console.log("Тестирование вычисления среднего арифметического возрастов в туре")

test('Тур 1', () => {
  expect(testTour_1.average()).toBe(5);
});

test('Тур 2', () => {
    expect(testTour_2.average()).toBe(28.9);
});

test('Тур 3', () => {
    expect(testTour_3.average()).toBe(26.3);
});

test('Тур 4', () => {
    expect(testTour_4.average()).toBe(35.6);
});