const sortStr = (str) => str.split(' ').sort((a, b)=> a.match(/(\d+)/)[0] - b.match(/(\d+)/)[0]).join(' ')

console.log(sortStr("is2 Thi1s T4est 3a"))//                 Thi1s is2 3a T4est
console.log(sortStr("4of Fo1r pe6ople g3ood th5e the2"))  // Fo1r the2 g3ood 4of th5e pe6ople