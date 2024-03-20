# 二分查找法

二分查找也称折半查找（Binary Search），它是一种效率较高的查找方法。但是，折半查找要求线性表必须采用顺序存储结构，而且表中元素按关键字有序排列。

## 算法要求

1.必须采用顺序存储结构。  
2.必须按关键字大小有序排列。

## 时间复杂度

二分查找法的主要优点是比其他线性算法更快，其时间复杂度为 O(log n)。

## 查找过程

首先，从数组的中间元素开始，如果中间元素正好是目标值，则搜索结束。

如果目标值大于或小于中间元素，则在数组大于或小于中间元素的那一半中搜索，而忽略另一半。

然后，我们在选定的一半中重复第一步的过程，直到找到目标值，或者搜索区间为空。

## 代码实现

```js
const arr = [1, 2, 3, 4, 5, 6, 12, 32, 34, 55, 78, 110];

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    }

    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // 找不到，返回-1
  return -1;
}

console.log(binarySearch(arr, 55)); // => 9
console.log(binarySearch(arr, 555)); // => -1
```
