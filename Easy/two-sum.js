/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let comHolder = [];
    for( i=0; i<nums.length; i++ ) {
        const complement = target - nums[i];
        if (comHolder[complement] !== undefined && comHolder[complement] !== i) 
            return [i, comHolder[complement]];

        comHolder[nums[i]] = i;    
    }
};