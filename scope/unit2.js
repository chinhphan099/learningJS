var a = 1;

var b = {
  a: 2,
  foo: function() {
    console.log(this.a);
  }
};

b.foo();

var fooCopy = b.foo;
fooCopy();
// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13

/*
    line 10 - gọi tới hàm foo, this là b => nên this.a = 2;
    line 12: gán fooCopy = b.foo; this lúc nào là window => this.a = 1;
    để line 13 cũng ra 2 thì có thể gọi fooCopy.apply(b); hoặc fooCopy.call(b);
*/
