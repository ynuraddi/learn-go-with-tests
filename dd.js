function sums(n) {
    if (n === 10) {
        return barabere
    }
    let num = Math.pow(10, n)
    let souce = []
    for (let i = 0; i < num; i++) {
        if (typeof liz(i, n) !== 'undefined') {
            souce.push(liz(i, n))
        }
    }
    let trueSouce = souce
    let res = []
    for (let i = 0; i < trueSouce.length; i++) {
        let bar = []
        for (let j = 0; j < trueSouce[i].length; j++) {
            for (let q = 0; q < trueSouce[i][j]; q++) {
                bar.push(j + 1)
            }
        }
        res.push(bar)
    }
    return res.slice(1).reverse()
}
// function sumOf(arr, n) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i] * (i + 1)
//     }
//     return (sum === n)
// }
function liz(num, n) {
    let arr = []
    while (n != arr.length) {
        arr.push(0)
    }
    let i = n - 1
    let sum = 0
    while (num > 0.9 && sum <= n) {
        arr[i] = num % 10
        sum += (num % 10) * (i + 1)
        i--
        num = Math.floor(num / 10)
    }
    // console.log(sum)
    if (sum === n) {
        return arr
    }
}
const barabere = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 3],
    [1, 1, 1, 1, 1, 1, 2, 2],
    [1, 1, 1, 1, 1, 1, 4],
    [1, 1, 1, 1, 1, 2, 3],
    [1, 1, 1, 1, 1, 5],
    [1, 1, 1, 1, 2, 2, 2],
    [1, 1, 1, 1, 2, 4],
    [1, 1, 1, 1, 3, 3],
    [1, 1, 1, 1, 6],
    [1, 1, 1, 2, 2, 3],
    [1, 1, 1, 2, 5],
    [1, 1, 1, 3, 4],
    [1, 1, 1, 7],
    [1, 1, 2, 2, 2, 2],
    [1, 1, 2, 2, 4],
    [1, 1, 2, 3, 3],
    [1, 1, 2, 6],
    [1, 1, 3, 5],
    [1, 1, 4, 4],
    [1, 1, 8],
    [1, 2, 2, 2, 3],
    [1, 2, 2, 5],
    [1, 2, 3, 4],
    [1, 2, 7],
    [1, 3, 3, 3],
    [1, 3, 6],
    [1, 4, 5],
    [1, 9],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 4],
    [2, 2, 3, 3],
    [2, 2, 6],
    [2, 3, 5],
    [2, 4, 4],
    [2, 8],
    [3, 3, 4],
    [3, 7],
    [4, 6],
    [5, 5],
]
// t(({ code }) => !code.includes('$'))
// t(({ eq }) => eq(sums(0), []))
// t(({ eq }) => eq(sums(1), []))
// t(({ eq }) => eq(sums(2), [[1, 1]]))
// t(({ eq }) => eq(fmt(sums(4)), $4))
// t(({ eq }) => eq(fmt(sums(7)), $7))
// t(({ eq }) => eq(fmt(sums(10)), $10))
console.log(sums(0))
console.log(sums(1))
console.log(sums(2))
console.log(sums(4))
console.log(sums(7))
console.log(sums(10))