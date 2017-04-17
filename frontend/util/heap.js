class MinHeap extends Array{
  constructor(arr = []){
    this.store = arr;
    this.count = this.count.bind(this);
    this.push = this.push.bind(this);
    this.extract= this.extract.bind(this);
    this.peek = this.peek.bind(this);

    if(arr.length > 0){
      arr.forEach((el) => this.push(el));
    }
  }

  count(){
    return this.store.length;
  }

  push(value){
    this.store.push(value);
    MinHeap.heapifyUp(this.store, this.count-1);
  }

  extract(){
    let tmp = this.store[0];
    this.store[0] = this.store[this.count-1];
    this.store[this.count] = tmp;
    MinHeap.heapifyDown(this.store, 0);
    return tmp;
  }

  peek(){
    return this.store[0];
  }
}

MinHeap.getParent = function(childIdx){
  if(childIdx !== 0){
    return Math.floor((childIdx - 1) / 2);
  } else {
    throw 'Root has no parent';
  }
};

MinHeap.getChild = function(arr, parentIdx){
  return [2*parentIdx + 1, 2*parentIdx + 2].filter((el) => el < arr.length);
};

MinHeap.heapifyDown = function(arr, parentIdx){
  let children = MinHeap.getChild(arr, parentIdx);

  if(children.length > 0){
    // get minimum value of children
    let minValue = Math.min(...children.map((idx) => arr[idx]));
    // get index for that minimum value
    let minIndex = children.filter((idx) => arr[idx] === minValue);
    if(arr[parentIdx] > arr[minIndex]){
      let tmp = arr[parentIdx];
      arr[parentIdx] = arr[minIndex];
      arr[minIndex] = tmp;
      MinHeap.heapifyDown(arr, minIndex);
    }
  }

  return arr;
};

MinHeap.heapifyUp = function(arr, childIdx){
  let parent = childIdx < 1 ? null : MinHeap.getParent(childIdx);

  if(parent != null && arr[parent] > arr[childIdx]){
    let tmp = arr[parent];
    arr[parent] = arr[childIdx];
    arr[childIdx] = tmp;
    MinHeap.heapifyUp(arr, parent);
  }

  return arr;
};

export default MinHeap;
