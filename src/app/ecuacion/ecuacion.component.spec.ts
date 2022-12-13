import { y } from "./ecuacion.component";

describe('y', () => {
  it('shoult return y', () => {
    const resutl = y([0.0,1.0,2.0,3.0],2.0,1.0);
    expect(resutl).toEqual([1,3,5,7])
  })
})

describe('y', () => {
  it('shoult return y', () => {
    const resutl = y([0.0,1.0,2.0,3.0],3.0,2.0);
    expect(resutl).toEqual([2,5,8,11])
  })
})

describe('y', () => {
  it('shoult return y', () => {
    const resutl = y([0.0,1.0,2.0,3.0],2.5,1.5);
    expect(resutl).toEqual([1.5,4,6.5,9])
  })
})

describe('y', () => {
  it('shoult return y', () => {
    const resutl = y([1.0,2.0,3.0,4.0],2.0,1.0);
    expect(resutl).toEqual([3,5,7,9])
  })
})

describe('y', () => {
  it('shoult return y', () => {
    const resutl = y([1.5,1.5,2.0,3.0],2.0,1.0);
    expect(resutl).toEqual([4,4,5,7])
  })
})
