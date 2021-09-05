// Property Access on Strings
var str = "HELLO WORLD";
console.log(str.charAt(0));
console.log(str[0]);

//String Over Multiple Lines
/* multiple Line 에서의 \의 사용은 보편적일 수는 없다. 일부의 구형 브라우저는 \ 문자뒤에 공백 허용 X */
console.log("YU \
JEON");
console.log("YU"+
"JEON"); //더 안전한 방법

//Reserved Words as Property Names
var obj = {name:"yujeon", new:"yes"}
console.log(obj);

//String.trim()
var str = "             Hello World!!!           "
console.log(str);
console.log(str.trim());

//Array.isArray()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(Array.isArray(fruits));

//Array.forEach()
var txt = "";
var numbers = [1, 3, 5, 7, 9];
numbers.forEach(count);
function count(value) {
    txt = txt + value + "그리고";
}
console.log(txt);

//Array.map()
var numbers1 = [1, 3, 5, 7, 9]
var numbers2 = numbers1.map(myFunction);
function myFunction(value){
    return value *2;
}
console.log(numbers2);

//Array.filter()
var over5 = numbers.filter(filtering);
function filtering(value) {
    return value > 5;
}
console.log(over5);

//Array.reduce() & reduceRight
var x = numbers.reduce(reducing);
var y = numbers.reduceRight(reducing);
function reducing(total, value) {
    return total + value;
}
console.log(x, y)

//Array.every() & Array.some()
var allover3 = numbers.every(over);
var someover3 = numbers.some(over)
function over(value) {
    return value > 3;
}
console.log(allover3, someover3);

//Array.indexOf() & Array.lastIndexOf() last나 일반이나 결과값이 똑같지만 last는 끝에서 검색
var a = fruits.indexOf("Apple");
var b = fruits.lastIndexOf("Apple");
console.log(a, b);

//JSON.stringify() JSON.parse()
var obj = {name:"John", age:30, city:"New York"};
var parseObj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj);
console.log(parseObj.name);

//Date.now() -> 1970년 1월 1일 00:00:00기준으로 millisecond표시
console.log(Date.now());
//Date.toISOSting()
const d = new Date();
console.log(d.toISOString());
//Date.toJSON() -> ISOSting과 문자 형식이 같다.
console.log(d.toJSON());