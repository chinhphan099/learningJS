/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var readline = require('readline-sync');
var fs = require('fs');
var utils = require('./utils');
var path = './user.json';

var contacts = [];

var loadData = function(isShow) {
  try {
    if (fs.existsSync(path)) {
      var content = fs.readFileSync(path)
      contacts = JSON.parse(content);
      if(isShow) {
        console.log(contents);
      }
    }
  } catch(err) {
    console.error(err)
  }
};

var viewAllContacts = function() {
  if(!!contacts.length) {
    console.log('* All Contacs *');
    for(var contact of contacts) {
      console.log(contact.name, ':', contact.phone);
    }
  }
  else {
    console.log('Don\'t have any contact!');
  }
};

var addContact = function() {
  var getName = readline.question('Name:'),
    getPhoneNumber = readline.question('Phone Number:');
  contacts.push({name: getName, phone: getPhoneNumber});
  console.log('=> Added successfully!!!');
};

var updateContact = function() {
  console.log('Find user');
  var getName = readline.question('Name:'),
    getPhoneNumber = readline.question('Phone Number:');

  for(var [index, contact] of contacts.entries()) {
    if(utils.changeAlias(getName) === utils.changeAlias(contact.name) &&
      getPhoneNumber === contact.phone) {
      console.log('Update to');
      var getNewName = readline.question('Edit Name:'),
        getNewPhoneNumber = readline.question('Edit Phone Number:');

      if(!!contact.name) {
        contact.name = getNewName;
      }
      if(!!contact.phone) {
        contact.phone = getNewPhoneNumber;
      }

      console.log('> Updated successfully.');
      return false;
    }
  }
  console.log('> Not Found.');
};

var removeContact = function() {
  var getName = readline.question('Name:'),
    getPhoneNumber = readline.question('Phone Number:');

  for(var [index, contact] of contacts.entries()) {
    if(utils.changeAlias(getName) === utils.changeAlias(contact.name) &&
      getPhoneNumber === contact.phone) {
      contacts.splice(index, 1);
      console.log('> Contact had been removed.');
      return false;
    }
  }

  console.log('Not Found.');
};

var findContact = function() {
  var getName = readline.question('Find user has Name:'),
    isExist = false;
  for(var contact of contacts) {
    if(utils.changeAlias(contact.name) === utils.changeAlias(getName)) {
      console.log('> Phone: ', contact.phone);
      isExist = true;
    }
  }

  if(!isExist) {
    console.log('> Not Found.');
  }
};

var saveAndExit = function() {
  var confirm = readline.question('Are you sure to exit? (Y/N): ');
  if(confirm === 'Y' || confirm === 'y') {
    fs.writeFileSync(path, JSON.stringify(contacts), {encoding: 'utf8'});
  }
  else {
    showMenu();
  }
};

var showMenu = function() {
  console.log('*** MENU ***');
  console.log('Add contact (A)');
  console.log('Update contact(U)');
  console.log('Remove Contact (R)');
  console.log('Find Contact (F)');
  console.log('View All Contacts (V)');
  console.log('Save and Exit (S)');

  var command = readline.question('?>');
  switch(command) {
    case 'A':
    case 'a':
      addContact();
      console.log('\n');
      showMenu();
      break;
    case 'U':
    case 'u':
      updateContact();
      console.log('\n');
      showMenu();
      break;
    case 'R':
    case 'r':
      removeContact();
      console.log('\n');
      showMenu();
      break;
    case 'F':
    case 'f':
      findContact();
      console.log('\n');
      showMenu();
      break;
    case 'V':
    case 'v':
      viewAllContacts();
      console.log('\n');
      showMenu();
      break;
    case 'S':
    case 's':
      saveAndExit();
      break;
    default:
      console.log('\n');
      showMenu();
  }
};

var initApp = function () {
  loadData();
  showMenu();
};

initApp();
