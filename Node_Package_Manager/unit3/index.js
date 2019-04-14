/**
 * https://github.com/sindresorhus/awesome-nodejs
 * Đây là một trang tổng hợp nhiều node module rất hay (không phải là tất cả)
 * Hãy thử học cách dùng 1 module mà bạn hiểu, tạo 1 ví dụ và giải thích về nó.
 * Sau này bạn sẽ cần phải google rất nhiều, học cách đọc tài liệu sẽ giúp cho công việc của bạn trong tương lai.
 */

const cpy = require('cpy');
/*
cpy('index.js', 'destination', {
  rename: basename => `new-${basename}`
});
*/


(async () => {
  try {
    await cpy('index.js', 'destination', {
      rename: basename => `new-${basename}`
    }).on('progress', progress => {
      console.log('Copy Done!')
    });
  }
  catch(err) {
    console.log(err);
  }
})();


/*
  cpy thực hiện việc copy 1 file.
  gồm 3 parameter
  1. tên file cần copy.
  2. đường dẫn của thư mục, nơi sẽ chứa file mới đc copy
  3. 1 object các options.
*/
