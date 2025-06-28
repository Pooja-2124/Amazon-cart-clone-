import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


export const deliveryOptions=[
{
    id:'1',
    deliveryDays:7,
    priceCents:0
},{
    id:'2',
    deliveryDays:3,
    priceCents:499
},{
    id:'3',
    deliveryDays:1,
    priceCents:999
}
];


export function getDeliveryOption(deliveryOptionId) {
      let deliveryOption;
  deliveryOptions.forEach((option)=>{
    if(option.id === deliveryOptionId){
      deliveryOption=option;
    }
  });
  return deliveryOption || deliveryOptions[0];
}


// export function calculateDeliveryDate(deliveryOption) {
//         const today = dayjs();
//         const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
//         const dateString = deliveryDate.format('dddd, MMMM D');
//         return dateString;
// }



export function calculateDeliveryDate(deliveryOption) {
  let deliveryDate = dayjs(); // start from today
  let daysRemaining = deliveryOption.deliveryDays;

  while (daysRemaining > 0) {
    deliveryDate = deliveryDate.add(1, 'day'); // add 1 day each loop
    const dayOfWeek = deliveryDate.format('dddd');

    // Only count weekdays
    if (dayOfWeek !== 'Saturday' && dayOfWeek !== 'Sunday') {
      daysRemaining--;
    }
  }

  return deliveryDate.format('dddd, MMMM D');
}
