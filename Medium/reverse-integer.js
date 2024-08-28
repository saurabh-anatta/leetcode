/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let reveresed = 0;
    while(x) {
        reveresed = reveresed*10 + x%10;
        if (Math.abs(reveresed) > (Math.pow(2,31) - 1) ) {
            reveresed = 0;
            break;
        }
        x = x > 0 ? Math.floor(x/10) : Math.ceil(x/10);
    }

    return reveresed;
};