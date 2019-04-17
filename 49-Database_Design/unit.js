/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */
var bookshelves = [
  {
    bsId: 'bs001'
  },
  {
    bsId: 'bs002'
  },
  {
    bsId: 'bs003'
  }
];

var books = [
  {
    bId: 'b00001',
    bName: 'Học làm giàu',
    stayAt: 'bs001',
    borrowTimes: 29
  },
  {
    bId: 'b00002',
    bName: 'Học làm giàu - phần 2',
    stayAt: 'bs001',
    borrowTimes: 219
  },
  {
    bId: 'b00003',
    bName: 'Làm giàu không khó',
    stayAt: 'bs002',
    borrowTimes: 129
  },
  {
    bId: 'b00004',
    bName: 'Làm mãi không giàu',
    stayAt: 'bs003',
    borrowTimes: 229
  },
  {
    bId: 'b00005',
    bName: 'Làm mãi không giàu - phần 2',
    stayAt: 'bs003',
    borrowTimes: 529
  }
];

var users = [
  {
    userId: 'u0001',
    fullName: 'Phan Chinh',
    dob: '1997-01-20',
    borrow: [
      {
        bId: 'b00001',
        fromDate: '2019-01-01'.
        endDate: '2019-01-08'
      },
      {
        bId: 'b00002',
        fromDate: '2019-01-01'.
        endDate: '2019-01-15'
      }
    ]
  }
];

var history = [
  {
    userId: 'u0001',
    borow: [
      {
        bId: 'b00001',
        fromDate: '2019-01-01'.
        endDate: '2019-01-08'
      },
      {
        bId: 'b00002',
        fromDate: '2019-01-01'.
        endDate: '2019-01-15'
      }
    ]
  }
];

