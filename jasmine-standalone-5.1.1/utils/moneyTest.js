import {formatCurrency} from "../../scripts/utils/money.js";

describe('test suite: formatCurrency',()=>{
    it('converts cents into dollars',()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    

    it('rounds down to nearest cent',()=>{
        expect(formatCurrency(2000.4)).toEqual('20.00');
    });

    it('test the negative number',()=>{
        expect(formatCurrency(-2000.4)).toEqual('-20.00');
    });

    
});