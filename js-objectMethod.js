/**
 * Khai báo biến `rectangle` là 1 object gồm có các property:
 * - width: chiều rộng, là 1 số bất kì
 * - height: chiều cao, là 1 số bất kì
 * Viết các method:
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều cao
 * - getArea: trả về diện tích
 */
var rectangle = {
  width: 10,
  height: 20,
  getWidth: function() {
    return this.width;
  },
  getHeight: function() {
    return this.height
  },
  getArea: function() {
    return this.getWidth() * this.getHeight();
  }
};

//rectangle.getWidth();
//rectangle.getHeight();
rectangle.getArea();
