/* 
....truethy
1.true
2.any number(+ve,-ve) except 0
3.any string("s") except '' empty string
3.'0'
4.{} empty object
5.[] empty array

....falsy
1.false
2. 0 is a falsy number  
3. '' empty string ('')
4.undefined
5.null
*/
const x = -4;
if (x) {
    console.log("this is a truthy");
}
else {
    console.log("this is a falsy");
}