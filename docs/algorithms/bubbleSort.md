# 冒泡排序

冒泡排序（Bubble Sort）是一种简单的排序算法。它重复地遍历要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。遍历数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。

## 时间复杂度

冒泡排序的时间复杂度为 O(n^2)，在处理大数据集时可能效率较低

## 基本步骤

比较相邻的元素。如果第一个比第二个大（升序排序），就交换他们两个。

对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。

针对所有的元素重复以上的步骤，除了最后一个。

持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

[查看算法动态可视化](https://visualgo.net/zh/sorting)

## 代码实现

```js
const arr = [3, 2, 2, 1, 4, 1, 4, 5, 44, 23, 45, 12, 32];

function bubbleSort(array) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    /**
     * -i，是因为每经过一轮排序，最大的元素被排到末尾，不需要再参与比较
     * 因此，j < len - 1 - i的意思就是在每一轮排序中，只比较到还未确定位置的元素
     */
    for (let j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort(arr));
// [1, 1, 2, 2, 3, 4, 4, 5, 12, 23, 32, 44, 45]
```