
var product={
             productId:1234,
             productName:"Dabur",
			 productDescription:"Dabur Honey",
			 productPrice:55,
			 
					 productDisplay:function()
					 {
				     //   return "Product Id:" + this.productId;
						return "Product Id:"+this.productId +"productName::"+this.productName+"productDescription::"+this.productDescription+ "productPrice::"+this.productPrice;
					 },
					 
					 changePrice:function(newPrice){
					 this.productPrice=newPrice;
					 }
            }
			
			//var 
			
				console.log("Display All details"+product.productId);
			
			console.log("Display All details"+product.productDisplay());
			product.changePrice(11);
			console.log("Display All details"+product.productDisplay());;