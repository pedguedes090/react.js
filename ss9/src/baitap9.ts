function filterByType<T>(arr: T[], types: string[]): T[] {
  return arr.filter(item => types.includes(typeof item));
}
const mixedArray = [1, 'hello', 3, 'world', 5, 'typescript', true, null, undefined, { name: 'Alice' }];
console.log(filterByType(mixedArray, ['number', 'string']));
console.log(filterByType(mixedArray, ['object']));