const assert = require('assert');
const { add } = require('./math.js');

try {
  assert.strictEqual(add(2, 3), 6);
  console.log('✅ Test PASS');
} catch (error) {
  console.error('❌ Test FAIL');
  process.exit(1);
}
