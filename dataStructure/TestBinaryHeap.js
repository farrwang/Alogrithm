const BinaryHeap =require("./BinaryHeap");


function main() {
  const heap = new BinaryHeap();
  const arr = [1,3,5,6,8];
  arr.forEach((item)=> {
    heap.insert(item);
  })

  while(heap.size()>0) {
    console.log(heap.pop());
  }
}

main();