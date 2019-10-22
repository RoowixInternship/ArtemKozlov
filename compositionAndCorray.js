/* Composition */

const compose = (...args) => {
  return value => args.reduceRight((acc, fn) => acc = fn(acc), value)
}

const clgFloorFloatFromString = compose(console.log, Math.floor, parseFloat)
const expRoundFloatFromString = compose(Math.exp, Math.round, parseFloat)


clgFloorFloatFromString('13.5')
console.log(expRoundFloatFromString('13.5'))
console.log(Math.exp(Math.round(parseFloat('13.5'))))


/* Corray */

const corray = (fn, ...args) => {
  return function corrayFn(...newArgs) {
    args.push(...newArgs)

    if (fn.length <= args.length) {
      return fn(...args)
    }

    return corrayFn
  }
}

const sum = (a, b, c, d) => a + b + c + d

const twoArgsSum = corray(sum, 1, 2)
const freeArgsSum = twoArgsSum(3)
const resultSum = freeArgsSum(4)

console.log(resultSum);


