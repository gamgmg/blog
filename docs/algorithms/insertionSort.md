# 插入排序

插入排序（Insertion Sort）是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

## 时间复杂度

插入排序的时间复杂度为 O(n^2)，在处理大数据集时可能效率较低。

## 基本步骤

从第一个元素开始，该元素可以认为已经被排序。

取出下一个元素，在已经排序的元素序列中从后向前扫描。

如果被扫描的元素（已排序）大于新元素，将该元素后移一位。

重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置。

将新元素插入到该位置后。

重复步骤 2~5。

[查看算法动态可视化](https://visualgo.net/zh/sorting)

## 代码实现

```js
const arr = [11, 3, 14, 54, 67, 332, 12, 3];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}

console.log(insertionSort(arr));
// [3, 3, 11, 12, 14, 54, 67, 332]
```
