//Compare count of letter 'p' vs 't'
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str){
  if(str.trim().length === 0) {
    return 'empty string';
  }

  return (str.match(/p/g) || []).length === (str.match(/t/g) || []).length
}
console.log(equal_pt('')); // empty string
console.log(equal_pt('paatpsts')); // true
console.log(equal_pt('paatpss')); // false
