const assert = require('assert');
const { add, subtract, multiply, divide } = require('./math.js');

try {
  assert.strictEqual(add(2, 3), 5);
  // 新增的减法测试
  assert.strictEqual(subtract(5, 2), 3); 
  assert.strictEqual(multiply(3, 4), 12);
  assert.strictEqual(divide(12, 3), 4);
  console.log('✅ Test PASS');
} catch (error) {
  console.error('❌ Test FAIL');
  process.exit(1);
} 
 
