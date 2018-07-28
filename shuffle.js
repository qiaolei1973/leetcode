/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this._stack = [];
  this._sort = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this._stack.push(x);
  const l = this._sort.length;
  const stackIndex = this._stack.length - 1;
  let i = 0;
  while (i <= l) {
    if (i === l) {
      this._sort.push({ value: x, index: stackIndex });
      break;
    }
    if (x < this._sort[i].value) {
      this._sort.splice(i, 0, { value: x, index: stackIndex });
      break;
    }
    i++;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const stackIndex = this._stack.length - 1;
  this._sort = this._sort.filter(item => item.index !== stackIndex);
  this._stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const stackTileIndex = this._stack.length - 1;
  return this._stack.length ? this._stack[stackTileIndex] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this._sort[0] ? this._sort[0].value : null;
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
