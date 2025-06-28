import {cart} from '../../data/cart.js';


export function renderCheckoutHeader() {
       let totalQuantity=0;

        cart.forEach((cartItem)=>{
        totalQuantity+=cartItem.quantity;
        });


const html = `
    <div class="checkout-header-middle-section">
       <a class="return-to-home-link js-return-to-home-link"
        href="amazon.html">${totalQuantity} items</a>
    </div>
  `;

  document.querySelector('.js-return-to-home-link').innerHTML = html;

} 