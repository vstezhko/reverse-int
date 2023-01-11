module.exports = function reverse (n) {
    let res = n.toString().split('').reverse().filter(i => i>=0).join('')
    return (
        +res
    )
}

