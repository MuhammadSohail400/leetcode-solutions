/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }

        if (count > nums.length / 3 && !result.includes(nums[i])) {
            result.push(nums[i]);
        }
    }

    return result;
};