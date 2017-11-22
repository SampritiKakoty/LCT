var product=function(sku,name,desc){
    this.sku=sku;
	this.name=name;
	this.desc=desc;
	
	this.showProdDetails=function(){
		console.log("show details::"+sku+"::::"+name+"::::"+desc)
	return "show details::"+sku+"::::"+name+"::::"+desc;
	}
	
	
}

var apparel=function(size,color){
 this.size=size;
 this.color=color;
this.showApparelDetails=function(){
	return "show details::"+size+"::::"+color+"::::";
 
 }
}
 
var prod1= new product(123,"shirt","arrow shirt");
apparel.prototype=prod1;
var apparel1=new apparel("size","pink");
 
 
 //console.log("showProdDetails desc::"+apparel1.desc);
// console.log("showProdDetails size::"+apparel1.size);
// console.log("showProdDetails"+apparel1.showProdDetails());
// console.log("showApparelDetails"+apparel1.showApparelDetails());
 
 console.log("SKU:::"+apparel1.hasOwnProperty("sku"));
  console.log("SIZE:::"+apparel1.hasOwnProperty("size"));
  
  console.log("apparel1"+JSON.stringify(apparel.prototype))
  //