import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';

import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { products, loadProducts,loadProductsFetch} from "../data/products.js";
import {loadCart,loadCartFetch} from "../data/cart.js";

//promises makes code simpler to work with asynchoronous functions
//when we have multiple callback it cteate nesting , so at that promises makes it easier
//promise is a class,having resolve method same as done() in jasmine which is used to execute the asynchrosous function first and then move to the next code or function
//and then() is used to write the code which we want to execute after the asyn function or code 



new Promise((resolve) => {
    loadProducts(() => {
        resolve();
    });
}).then(() => {
        {
            renderOrderSummary();
            renderPaymentSummary();
        }
});


//practice 
//using callback
//instead of multiple callback use promise 
// loadProducts(() => {

    //    loadCart(()=>{
 //     renderOrderSummary();
//     renderPaymentSummary();
    //    });

// });


 
// using promises
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();
    });
}).then(()=>{
    new Promise((resolve)=>{
    loadCart(()=>{
    resolve();
    });
    });
}).then(()=>{
     renderOrderSummary();
    renderPaymentSummary();
});






// loadProducts(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// import '../data/cart-class.js';



// Promise.all() is used to run multiple asynchronous operations in parallel — not one after the other, but simultaneously — and waits for all of them to finish.
// “The promise runs async work in the background, and .then() waits for the result using resolve(), but the rest of the code doesn't stop — it continues running.”
//Even though it feels like it's waiting, JavaScript continues executing the next lines while the promise resolves in the background
// When you call resolve() in a promise, you are saying:

// "I'm done with this async task. Here's the result."

// That triggers any .then() attached to the promise to run later, but not immediately.

// The .then() callback is queued to run after the current code finishes, via the event loop.
// JavaScript runs in a single thread.

// But it uses a background system (like Web APIs + Event Loop) to handle async operations like:

// setTimeout

// fetch

// Promise

// XMLHttpRequest






// promise all
await Promise.all([
loadProductsFetch(),

 loadCartFetch()

]).then(()=>{
    console.log('render');
    renderOrderSummary();
    renderPaymentSummary();
});



// async function loadPage() {
//    console.log('load page');

//    await loadProductsFetch();

//    return 'value2';
// }
// loadPage().then((value)=>{
//     console.log('next step');
//     console.log(value);
    
// })



// async function loadPage() {
// await loadProductsFetch();

// const value= await new Promise((resolve)=>{
//     loadCart(()=>{
//         resolve('value3');
//     });
// })

//     renderOrderSummary();
//     renderPaymentSummary();
// }
// loadPage();





async function loadPage() {
try{
// throw 'error1';


await loadProductsFetch();

const value= await new Promise((resolve,reject)=>{
    // throw 'error2'; //throw does not work in future , can not used in callback
    //instead we ca use reject, it is used to create the error in the fututre.
    loadCart(()=>{
        //reject('error3');
        resolve('value3');
    });
})
}catch(error){
console.log('unexpected error,try again later');

}
 
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();



