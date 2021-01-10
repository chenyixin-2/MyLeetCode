var runningSum = function (nums) {
    let sum = new Array
    sum.push(nums[0])
    for (let i = 1; i < nums.length; ++i) {
        sum.push(sum[i - 1] + nums[i])
    }
    return sum
}

function run() {
    runningSum([1, 2, 3, 4])
}

REGISTER_ALGO(run)