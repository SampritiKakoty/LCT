//import { error } from "util";

function myFunPromise(){
    return new Promise(function (resolve,reject){
      result="success"
      error=new Error("failed")
        //resolve(result);
        reject(error)

    })
}

myFunPromise()
.then(result=>console.log("Result::::"+result))
.catch(error=>console.log("rerror"));



