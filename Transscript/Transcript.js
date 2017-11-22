//console.log("TyPeScript Programming");
/*
function Emp_details(id:number,name:string,emailId?:string)
{
    console.log("id"+id);
    console.log("name"+name);
    console.log("emailId"+emailId);
}

Emp_details(123,"Harish");
*/
/*
function addNumbers(...numb:number[]){
    var sum_number=0;
    for(int i=0;i<numb.length)
}

*/
//Return in the function
/*
var fn=new Function ("a","b","c=10","return a*b*c");
var x=fn(2,3);
console.log("id"+x);

*/
/*
function acceptArray(...arrayOfAny:any[]){
    var i:number;
    for(i=0;i<arrayOfAny.length;i++){
    console.log("name"+arrayOfAny[i]);
        
    }
    
}

acceptArray(["2",3,"hellp"]);

function convertToarray(id:number,name:string,emailId?:string){
    var arrayMine:any[]=new Array(4);
    arrayMine[0]=id;
    arrayMine[1]=name;
    arrayMine[2]=emailId;
    
    return arrayMine;
    
}

var myArray:any[]=convertToarray(123,"hi","emailId");
console.log("myArray"+myArray);

*/
var tupleEx = ["hello", 123, "yes"];
for (var i = 0; i < tupleEx.length; i++) {
    console.log("name" + tupleEx[i]);
}
tupleEx.push("India");
for (var i = 0; i < tupleEx.length; i++) {
    console.log("name" + tupleEx[i]);
}
