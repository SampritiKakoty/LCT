var fs=require('fs');
var Promise=require('bluebird')
Promise.promisifyAll(fs)

fs.readFileSync('data.json')
.then(JSON.parse)
.then(function(val){
    console.log("bval")
})

.catch(SyntaxError , function(e){
    console.error("Error")
}
)
.catch(function(e){
    console.log("kjkjl")
})