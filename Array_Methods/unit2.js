/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */

/*
  0. concat()
    Tạo ra mảng mới bằng cách nối nhiều mảng lại với nhau. Mảng gốc ko thay đổi.
*/
var arrA = [1, 2, 3];
var arrB = ['a', 'b'];
var arrC = arrA.concat(arrB);
console.log(arrA); // [1, 2, 3]
console.log(arrB); // ['a', 'b']
console.log(arrC); // [1, 2, 3, 'a', 'b']

console.log('End ================== .concat()');
/*
  1. pop()
    Xoá giá trị cuối cùng của mảng.
    Trả về giá trị bị xoá.
    Mảng gốc bị thay đổi.
    Trả về undefined nếu mảng rỗng
*/
var a = [2, 4, 1, 3];
console.log(a.pop()); //3
console.log(a); // [2, 4, 1]

var b = [];
console.log(b.pop()); // undefined

console.log('End ================== .pop()');
/*
  2. push()
    Thêm giá trị chỉ định vào cuối mảng.
    Trả về length mới của mảng.
    Mảng gốc bị thay đổi
*/
var c = [1, 2, 5];
console.log(c.push(11)); // 4
console.log(c); // [1, 2, 5, 11]

console.log('End ================== .push()');
/*
  3. shift()
    Xoá giá trị đầu tiên của mảng.
    Trả về giá trị bị xóa.
    Mảng gốc bị thay đổi.
    Trả về undefined nếu mảng rỗng
*/
var d = [2, 4, 1, 3];
console.log(d.shift()); // 2
console.log(d); // [4, 1, 3]

var e = [];
console.log(e.shift()); // undefined

console.log('End ================== .shift()');
/*
  4. unshift()
    Thêm giá trị chỉ định vào đầu mảng.
    Trả về length mới của mảng.
*/
var f = [1, 2, 5];
console.log(f.unshift(11)); // 4
console.log(f); // [11, 1, 2, 5]

console.log('End ================== .unshift()');
/*
  5. slice(start, end)
    Tạo ra 1 mảng mới, bao gồm các giá trị từ index start đến (end - 1)
    Mảng gốc không thay đổi
*/
var g = [5, 7, 9];
console.log(g.slice(0, 1));
console.log(g);

console.log('End ================== .slice(start, end)');
/*
  6. splice(start[, deleteCount[, item1[, item2[, ...]]]])
    Xoá deleteCount giá trị, từ start, và insert item1[, item2[, ...]]]] vào mảng.
    Mảng gốc bị thay đổi
    Trả về mảng chứa các phần tử bị xóa. Mảng gốc bị thay đổi, chứa cả những phần tử được thêm vào.
*/
var h = [3, 11, 5, 14, 90];
console.log(h.splice(1, 2)); // [ 11, 5 ] // Mảng chứa phần tử bị xóa
console.log(h); // [ 3, 14, 90 ] // Mảng mới không chứa phần tự bị xóa

console.log(h.splice(1, 0, '11', '5')); // mảng rỗng vì ko xóa giá trị nào
console.log(h); // [ 3, '11', '5', 14, 90 ] // Mảng mới có chứa phần từ được thêm vào

console.log('End ================== .splice(start, end)');
