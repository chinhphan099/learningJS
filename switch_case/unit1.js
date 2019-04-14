/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
  return arr.map(function(item) {
    switch(item) {
      case 'A':
      case 'a':
        item = 1;
        break;
      case 'B':
      case 'b':
        item = 2;
        break;
      default:
        item = 0;
    }
    return item;
  });
}

transform(['A', 'b', 'a', 'B', 'd']);
// [1, 2, 1, 2, 0]
