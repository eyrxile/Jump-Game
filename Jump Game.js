var canJump = function(nums) {
    if(!nums || nums.length == 0) return false;

    let maxReach = 0;

    for(let i = 0; i < nums.length; i++) {
        if(i > maxReach) {
            return false;
        }

        maxReach = Math.max(maxReach, i + nums[i]);

        if(maxReach >= nums.length - 1) {
            return true;
        }
    }
    return false;
};

//Example usage:
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));