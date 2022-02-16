const assert = require('assert');

const getter = require('../dist/getter');

const obj = {
  a: {
    b: [1, 2, { c: [3, 4, [5, { d: 6 }]] }]
  }
}

console.log(`  ===>>> const obj = ${JSON.stringify(obj)}`);

describe('getter.js', function() {
  it(`getter()(obj) should return obj`, function() {
    assert.deepEqual(getter()(obj), obj);
  });

  it(`getter('', obj) should return obj`, function() {
    assert.deepEqual(getter('', obj), obj);
  });
  it(`getter('')(obj) should return obj`, function() {
    assert.deepEqual(getter('')(obj), obj);
  });

  it(`getter(undefined, obj) should return obj`, function() {
    assert.deepEqual(getter(undefined, obj), obj);
  });
  it(`getter(undefined)(obj) should return obj`, function() {
    assert.deepEqual(getter(undefined)(obj), obj);
  });

  it(`getter('x', obj) should return undefined`, function() {
    assert.equal(getter('x', obj), undefined);
  });
  it(`getter('x')(obj) should return undefined`, function() {
    assert.equal(getter('x')(obj), undefined);
  });

  it(`getter('a', obj) should return obj.a`, function() {
    assert.deepEqual(getter('a', obj), obj.a);
  });
  it(`getter('a')(obj) should return obj.a`, function() {
    assert.deepEqual(getter('a')(obj), obj.a);
  });

  it(`getter('a.x', obj) should return undefined`, function() {
    assert.equal(getter('a.x', obj), undefined);
  });
  it(`getter('a.x')(obj) should return undefined`, function() {
    assert.equal(getter('a.x')(obj), undefined);
  });

  it(`getter('a.b', obj) should return obj.a.b`, function() {
    assert.deepEqual(getter('a.b', obj), obj.a.b);
  });
  it(`getter('a.b')(obj) should return obj.a.b`, function() {
    assert.deepEqual(getter('a.b')(obj), obj.a.b);
  });

  it(`getter('a[b]', obj) should return obj.a.b`, function() {
    assert.deepEqual(getter('a["b"]', obj), obj.a.b);
  });
  it(`getter('a[b]')(obj) should return obj.a.b`, function() {
    assert.deepEqual(getter('a["b"]')(obj), obj.a.b);
  });

  it(`getter('a.b[0]', obj) should return 1`, function() {
    assert.equal(getter('a.b[0]', obj), 1);
  });
  it(`getter('a.b[0]')(obj) should return 1`, function() {
    assert.equal(getter('a.b[0]')(obj), 1);
  });

  it(`getter('a.b["0"]', obj) should return 1`, function() {
    assert.equal(getter('a.b["0"]', obj), 1);
  });
  it(`getter('a.b["0"]')(obj) should return 1`, function() {
    assert.equal(getter('a.b["0"]')(obj), 1);
  });

  it(`getter('a.b[1]', obj) should return 2`, function() {
    assert.equal(getter('a.b[1]', obj), 2);
  });
  it(`getter('a.b[1]')(obj) should return 2`, function() {
    assert.equal(getter('a.b[1]')(obj), 2);
  });

  it(`getter('a.b[2].c', obj) should return obj.a.b[2].c`, function() {
    assert.deepEqual(getter('a.b[2].c', obj), obj.a.b[2].c);
  });
  it(`getter('a.b[2].c')(obj) should return obj.a.b[2].c`, function() {
    assert.deepEqual(getter('a.b[2].c')(obj), obj.a.b[2].c);
  });

  it(`getter('a.b[2]["c"]', obj) should return obj.a.b[2].c`, function() {
    assert.deepEqual(getter('a.b[2]["c"]', obj), obj.a.b[2].c);
  });
  it(`getter('a.b[2]["c"]')(obj) should return obj.a.b[2].c`, function() {
    assert.deepEqual(getter('a.b[2]["c"]')(obj), obj.a.b[2].c);
  });

  it(`getter('a.b[2]["c"][0]', obj) should return 3`, function() {
    assert.deepEqual(getter('a.b[2]["c"][0]', obj), 3);
  });
  it(`getter('a.b[2]["c"][0]')(obj) should return 3`, function() {
    assert.deepEqual(getter('a.b[2]["c"][0]')(obj), 3);
  });

  it(`getter('a.b[2]["c"][1]', obj) should return 4`, function() {
    assert.deepEqual(getter('a.b[2]["c"][1]', obj), 4);
  });
  it(`getter('a.b[2]["c"][1]')(obj) should return 4`, function() {
    assert.deepEqual(getter('a.b[2]["c"][1]')(obj), 4);
  });

  it(`getter('a.b[2]["c"][2][0]', obj) should return 5`, function() {
    assert.deepEqual(getter('a.b[2]["c"][2][0]', obj), 5);
  });
  it(`getter('a.b[2]["c"][2][0]')(obj) should return 5`, function() {
    assert.deepEqual(getter('a.b[2]["c"][2][0]')(obj), 5);
  });

  it(`getter('a.b[2]["c"][2][1].d', obj) should return 6`, function() {
    assert.deepEqual(getter('a.b[2]["c"][2][1].d', obj), 6);
  });
  it(`getter('a.b[2]["c"][2][1].d')(obj) should return 6`, function() {
    assert.deepEqual(getter('a.b[2]["c"][2][1].d')(obj), 6);
  });

  it(`getter('a.b[2]["c"][2][1].d.x', obj) should return undefined`, function() {
    assert.deepEqual(getter('a.b[2]["c"][2][1].d.x', obj), undefined);
  });
  it(`getter('a.b[2]["c"][2][1].d.x')(obj) should return undefined`, function() {
    assert.deepEqual(getter('a.b[2]["c"][2][1].d.x')(obj), undefined);
  });

  it(`getter('a.b[2]["c"][2][1].d.x[999]', obj) should return undefined`, function() {
    assert.deepEqual(getter('a.b[2]["c"][2][1].d.x[999]', obj), undefined);
  });
  it(`getter('a.b[2]["c"][2][1].d.x[999]')(obj) should return undefined`, function() {
    assert.deepEqual(getter('a.b[2]["c"][2][1].d.x[999]')(obj), undefined);
  });
});
