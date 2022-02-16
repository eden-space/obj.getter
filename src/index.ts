/***
 * @name obj.getter
 * @description Get a value corresponding to path of object.
 *
 * Usage:
 * getter('a.b.c', { a: { b: { c: 1 } } }) ===>>> 1
 * getter('a.b.c')({ a: { b: { c: 1 } } }) ===>>> 1
 */

const IDENTIFIER_REGEX = /\[(?:(\d+)|['"](.*?)['"])]|((?:(?!\[.*?]|\.).)+)/g;
const MEMORY_CACHE: Record<string, any> = {};

function pathToKeys(path: string) {
  const pathKeys: string[] = [];
  // @ts-ignore
  path?.replace(IDENTIFIER_REGEX, (match, index, indexAccessor, fieldName) => {
    pathKeys.push(index !== undefined ? index : (indexAccessor || fieldName));
  });
  return pathKeys;
}

function getter(path: string, obj?: Record<string, any>): any;
function getter(path: string): (obj: Record<string, any>) => any;

function getter(path: string, obj?: Record<string, any>): any {
  let get = MEMORY_CACHE[path];
  if (!get) {
    const pathKeys = pathToKeys(path);
    get = (obj: Record<string, any>): any => {
      let result = obj;
      for (let idx = 0; idx < pathKeys.length && result; idx++) {
        result = result[pathKeys[idx]];
      }
      return result;
    };

    MEMORY_CACHE[path] = get;
  }

  if (obj) {
    return get(obj);
  }

  return get;
}

export default getter;
