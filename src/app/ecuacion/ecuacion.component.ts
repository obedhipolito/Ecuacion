export function y (x: Array<number>, a: number, b: number){
  let y = [];
  let y2 = [];

  for (let i of x){
      let mult = i*a
      y.push(mult.valueOf())
  }

  for (let i of y){
      let plus = i+b
      y2.push(plus.valueOf())
  }

  return y2
}