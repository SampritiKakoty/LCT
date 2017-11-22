/*function F1(a,b){
 var X=40;
 return (function F2(){
  console.log("X=",+X);
  });
}

var rnn = F1(10,20);
rnn();
*/

var myFunc=function(){
	var x=10;
	function display()
	{
		x++;
		console.log("Print x:::"+x)
		
	}
	return x;
}

var f1=myFunc();
//myFunc();
//myFunc();
//myFunc();
//myFunc();

f1();
f1();
f1();
f1();



