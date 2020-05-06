/**
 *  Перемешивает массив (изменяет исходный)
 * @param {array} array массив, который надо перемешать
 * @return {array} возвращает перемешанный массив
 */
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
}

/**
 *  Возвращает геннератор с диапазоном от start до end
 * @param {number} start начало диапазона
 * @param {number} end конец диапазона
 * @return {object} возвращает генератор
 */
function* range(start, end) {
    yield start;

    if (start === end) return;

    yield* range(start + 1, end);
}

let arr1 = shuffle([...range(1, 100)]);
let arr2 = [...arr1].reverse();
let arr3 = [...arr1].map((item, index) => item - arr2[index]);
let average = arr3.reduce((acc, item) => acc + item, 0) / arr3.length;

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(average);

