/**
 * 用二叉树结构实现堆结构 
 * 用数组结构来存储堆
 * i 为数组索引  leftChild = 2 * i+1  rightChid = 2 * i + 2  parent = Math.floor((i-1)/2)
 */
class BinaryHeap {
  constructor() {
    this.heap = new Array();
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  size() {
    return this.heap.length;
  }
  /**
   * 在堆的末尾插入值之后需要进行上浮操作，时间复杂度为O(logn)
   */
  bubbleUp() {
    let index = this.heap.length - 1;
    // 可以是用while循环，也可以使用递归，递归占用内存较大
    while(index > 0) {
      let curr = this.heap[index];
      let parentIndex = Math.floor((index-1)/2);
      let parentValue = this.heap[parentIndex];
      if(parentValue > curr) break;
      this.heap[index] = parentValue;
      this.heap[parentIndex] = curr;
      index = parentIndex;
    }
  }
  /**
   * 取出堆顶的元素
   */
  pop() {
    if(this.size()===0) {
      return null;
    }
    let max = this.heap[0];
    let changeVal = this.heap.pop();
    if(this.size() > 0) {
      this.heap[0] = changeVal;
      this.siftDown(0);
    }
    return max;
  }
  /**
   * 下沉操作
   * @param {*} index 下沉索引, 左右谁大谁上浮
   */
  siftDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let curr = index;
    if(left <= this.size() && this.heap[curr] < this.heap[left]) {
      curr = left;
    }
    
    if(right<= this.size() && this.heap[curr] < this.heap[right]) {
      curr = right;
    }

    if(curr !== index) {
      [this.heap[curr],this.heap[index]] = [this.heap[index],this.heap[curr]];
      this.siftDown(curr);
    }
  }
}

module.exports = BinaryHeap;