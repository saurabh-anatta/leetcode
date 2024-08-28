/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const final = nums1.concat(nums2).sort((a,b) => a-b);
    if (final.length%2 === 0) {
        return (final[(final.length/2)-1] + final[final.length/2])/2 
    } else {
        return final[(final.length-1)/2]
    }
};