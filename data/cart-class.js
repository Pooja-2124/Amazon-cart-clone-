class Cart {
    //     cartItems=undefined;
    // localStorageKey=undefined;
            cartItems;
    localStorageKey;


    constructor(localStorageKey) {
        this.localStorageKey=localStorageKey;
        this.loadFromStorage();
    }

 


 loadFromStorage() {

this.cartItems=JSON.parse(localStorage.getItem(this.localStorageKey));
if(!this.cartItems){
  this.cartItems=[
    {
         productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
         quantity:1,
         deliveryOptionId:'1'
    },
    {
         productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
         quantity:2,
         deliveryOptionId:'2'
    }];
}
}

 saveToStorage() {
  localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
}

 
addToCart(productId, quantity) {

  let matchingItem;

  cart.forEach((cartItem) => {
   
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: quantity,
      deliveryOptionId:'1'
    });
  }

  saveToStorage();
}




 removeFromCart(productId) {
    const newCart=[];


    this.cartItems.forEach((cartItem)=>{
     if(cartItem.productId !== productId){
        newCart.push(cartItem);
     }
    })
    this.cartItems=newCart;
    saveToStorage();
};



 calculateCartQuantity() {
  let cartQuantity = 0;

  this.cartItems.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  return cartQuantity;
};


 updateDeliveryOption(productId,deliveryOptionId) {
  let matchingItem;

  this.cartItems.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId=deliveryOptionId;

  saveToStorage();
};

 getCart() {
  return cart;
}
};


const cart=new Cart('cart');
const businessCart=new Cart('businessCart');

console.log(cart);
console.log(businessCart);


