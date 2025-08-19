function createObject<K extends string, V>(
  keys: readonly K[],
  values: readonly V[]
): Record<K, V> {
  const result = {} as Record<K, V>;
  const len = Math.min(keys.length, values.length);

  for (let i = 0; i < len; i++) {
    const key = keys[i]!;
    const value = values[i]!;
    result[key] = value;
  }

  return result;
}

const keys = ['name', 'age', 'email'] as const;
const values = ['Alice', 25, 'alice@example.com'] as const;

const obj = createObject(keys, values);
console.log(obj);