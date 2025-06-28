export const orders=JSON.parse(localStorage.getItem('orders')) || [];

export function addOrders(order) {
    orders.unshift(order); //unshift add the order to the front of the array instead of the back
    
    saveToStorage();
}


function saveToStorage() {
    localStorage.setItem('orders',JSON.stringify(orders));
}
  console.log(orders);


export function getOrder(orderId) {
  let matchingOrder;

  orders.forEach((order) => {
    if (order.id === orderId) {
      matchingOrder = order;
    }
  });

  return matchingOrder;
}