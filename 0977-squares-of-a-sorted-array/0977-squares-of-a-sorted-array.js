/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        nums[i] = nums[i] * nums[i];
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }

    return nums;
};