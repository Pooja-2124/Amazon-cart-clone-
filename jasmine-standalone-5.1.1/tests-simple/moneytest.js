import {formatCurrency} from "../../scripts/utils/money.js";

//two type of test cases 
// basic test case for normal and basic values to check whethere the code is working or not6
//edge test case for tricky values


//group of same test case called test suite

//automated test: using code test code
console.log('test suite: formatCurrency');

console.log('converts cents into dollars');

if(formatCurrency(2050)==='20.50'){
   console.log('passed');
   
}
else{
    console.log('failed');
    
}

console.log('works with 0');
if(formatCurrency(0)==='0.00'){
   console.log('passed');
   
}
else{
    console.log('failed');
    
}


console.log('rounds up to the nearest cent');


if (formatCurrency(2000.5 === '20.01')) {
    console.log('passed');
    
}
else{
    console.log('failed');
    
}