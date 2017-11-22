

function Product(productId,productName,productDescription,productPrice){
this.productId=productId;
this.productName=productName;
this.productDescription=productDescription;
this.productPrice=productPrice;



Product.prototype.apparel=function(belt){
	this.apparel=belt;
	return this.apparel;
}

 this.displayProductDetail=function(){
     return "Product Id:"+this.productId +"productName::"+this.productName+"productDescription::"+this.productDescription+ "productPrice::"+this.productPrice;
      }
	  
 this.updatePrice=function(price){
	this.productPrice=price;
 }
	  
	  
}





var productInfo=new Product("123","Honey","Dabur Honey",55);
var productInfo1=new Product("1233","Honey1","Dabur Honey1",551);
console.log("display Details"+productInfo.displayProductDetail());

productInfo.updatePrice(22);

console.log("display Details"+productInfo.displayProductDetail());

//var productInfo=new Apparel("123","Honey","Dabur Honey",55,"belt");

//console.log("Apparel"+productInfo.apparel);

console.log("Apparel  attributes:::::::"+productInfo.apparel("red"));
console.log("Apparel  attributes:::::::"+productInfo1.apparel("red"));


