function parseNum(val: string | number): number| null{
    let num= Number(val)
    return isNaN(num)? null : num
}
function plus(a: string|number, b: string| number): number| string{
    let A=parseNum(a)
    let B=parseNum(b)
    if(A===null || B===null) return "khong hop le"
    return A+B
}
function sub(a: string|number, b: string| number): number| string{
    let A=parseNum(a)
    let B=parseNum(b)
    if(A===null || B===null) return "khong hop le"
    return A-B
}
function mul(a: string|number, b: string| number): number| string{
    let A=parseNum(a)
    let B=parseNum(b)
    if(A===null || B===null) return "khong hop le"
    return A*B
}
function div(a: string|number, b: string| number): number| string{
    let A=parseNum(a)
    let B=parseNum(b)
    if(A===null || B===null) return "khong hop le"
    return A/B
}
console.log(plus("23",4))
console.log(sub('20','21'))
console.log(mul(12,43))
console.log(div(520,4))