function miniMaxSum(arr) {
    // Write your code here
    let max = arr[0];
    let min = arr[0];
    let maxSum = 0;
    let minSum = 0;
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }else if (arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
        maxSum = sum - min;
        minSum = sum - max;
    }
    return console.log(minSum + " " + maxSum);
}