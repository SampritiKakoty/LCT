var fs = require('fs');
fs.readFile('ExJson.json','utf-8',function(error,data){
    console.log("data"+data);
})

//fs.writeFile('ExJson.json', 'ExJson_v1.json', 'utf8');

fs.copyFile('ExJson.json', 'Ex_Json.json', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  });