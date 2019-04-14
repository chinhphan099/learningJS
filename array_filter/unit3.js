// Given a list of students, filter out the famale ones
function filterOutFemales(members) {
  var notFemale = members.filter(function(member) {
    return member.gender !== 'female';
  });
  return notFemale;
}


var members = [
  { name: 'Lan', gender: 'female' },
  { name: 'Linh', gender: 'female' },
  { name: 'Trung', gender: 'male' },
  { name: 'Peter', gender: 'gay' }
];
filterOutFemales(members);
/*
[
  { name: 'Trung', gender: 'male' },
  { name: 'Peter', gender: 'gay' }
]
*/
