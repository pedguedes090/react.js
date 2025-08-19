function mergeObjects<T,U>(a: T,b:U):T&U{
    return { ...a, ...b }
}
let person = { name: "Join" }
let job = { role: "Developer" }
console.log(mergeObjects(person, job))