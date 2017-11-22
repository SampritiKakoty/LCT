/*function myFirstFn(){
console.log("My fn called");
function f1(){
	console.log("My fn 111 called");
}
f1();
}

myFirstFn();
*/

/*var f1=function(a,b){
	console.log("print a and b" + a +"&"+b);

	function innerFunc()
	{
		console.log("My fn called");
	}
	innerFunc();
	return(function()
	{
		console.log("retuenable fn");
	}
	)
	}
	
var checkAllFn=	f1(12,29);
checkAllFn();

*/

//No parameter
var AF=()=> console.log("Arrow fun with no param");
AF();
/*

*/

//one parameter var A=30
var AF1=A => 49+A;
var returnVal=AF1(20);
console.log("Arrow fun with no param & return Value"+returnVal);

//more than 1 arguments only 1 statement
var AF2=(A,B) => A+B;
var returnValueSum=AF2(20,10);
console.log("Arrow fun with more than one param & return Value"+returnValueSum);

//more than 1 arguments more statement
var AF3=(A,B) =>{
   console.log("About to add");
return A+B;
}
var returnValueSum=	AF3(20,10);

console.log("Arrow fun with more than one param & return Value"+returnValueSum);