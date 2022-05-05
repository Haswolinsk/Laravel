var firtsname = "John";
var lastname = "Doe";
var age = 50;
var fullname = firtsname +  " " + lastname;
var fullname2 = `Meu nome é ${firtsname} ${lastname} e tenho ${age} anos`
/* console.log(fullname);
console.log(fullname2); */

var uri = "https://www.google.com.br/"
var uri2 = `${uri}search?q=${fullname}`

var fullnameUpperCase = fullname.toUpperCase();
var fullnameLowerCase = fullname.toLowerCase();
var fullnameCapitalize = fullname.substring(0,2);
var fullnameSplit = fullname.split("o")

console.log(fullnameUpperCase);
console.log(fullnameLowerCase);
console.log(fullnameCapitalize);
console.log(fullnameSplit)
