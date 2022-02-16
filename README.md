# obj.getter

Utility function to get a value corresponding to path of object.

## Install

```shell
npm i obj.getter
```

## Usage

```ts
import getter from 'obj.getter';

const value1 = getter('a.b[0].c', { a: { b: [{ c: 1 }] } });
const value2 = getter('a.b[0]["c"]', { a: { b: [{ c: 1 }] } });
const value3 = getter('a.b["0"].c', { a: { b: [{ c: 1 }] } });

const value4 = getter('a.b[0].c')({ a: { b: [{ c: 1 }] } });

console.log(value1); // 1
console.log(value2); // 1
console.log(value3); // 1
console.log(value4); // 1
```

## API

```typescript
function getter(path: string, obj?: Record<string, any>): any;
function getter(path: string): (obj: Record<string, any>) => any;
```

Return a value corresponding to path of object.

## License

MIT