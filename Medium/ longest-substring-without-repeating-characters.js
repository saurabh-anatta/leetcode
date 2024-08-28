/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) { 
    let lonestSubString = 0;
    let substring = [];
    for(i=0; i<s.length; i++) {
        if ( substring.indexOf(s[i]) !== -1 ) {
            substring.splice(substring.indexOf(s[i]) +1);
        } 
            
        substring.push(s[i]);

        if (lonestSubString < substring.length ) lonestSubString = substring.length;
    }

    return lonestSubString;
};