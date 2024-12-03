const number = [1,2,3,4,5,6,7,8,9,10];

function result(number) {
    const oddNum = number.filter(n => n % 2 == 1)
    const evenNum = number.filter(n => n % 2 == 0)
    return [oddNum, evenNum]
};

console.log(result(number))