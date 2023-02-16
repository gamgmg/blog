# 冒泡排序

利用双指针

```js
/**
 * 思路：
 * 定义一函数，传入一数组作为参数
 * 函数开头先判断数组长度是否为0或者为1，是就直接返回数组
 * 通过双指针的方式遍历数组
 * 首先定义指针i，从头遍历数组，到数组倒数第二位为止，最后一位不用遍历，因为后面没有元素了，无法做位置互换
 * 在指针i遍历内部定义指针j，从头遍历数组，到数组倒数第二位减去指针i的值为止，减去指针i是因为每次指针i遍历一遍后，都会把最大的元素推到数组末尾
 * 在指针j遍历内容判断
 * 如果当前j指针元素大于下一位元素，就互换两者位置
 * 最后双指针遍历完成后，返回已被从新排序过的数组
 */

var arr = [3,2,2,1,4,1,4,5,44,23,45,12,32]

function bubbleSort(arr){
  // 如果数组为空或者数组长度只有一位，直接返回数组
  if(!arr.length || arr.length === 1) return arr
  // 获取数组长度
  var len = arr.length
  // 定义指针i，从0开始，到数组倒数第二位索引结束，执行遍历
  for(var i=0; i<len-1; i++) {
    // 定义指针j，从0开始，到数组倒数第二位索引-i结束，执行遍历
    for(var j=0; j < len-1-i;j++){
      // 如果j指针位置的元素比下一个元素大，则互换两者位置
      if(arr[j] > arr[j+1]){
        arr[j] = arr[j] + arr[j+1]
        arr[j+1] = arr[j] - arr[j+1]
        arr[j] = arr[j] - arr[j+1]
      }
    }
  }
  // 最后返回排序后的数组
  return arr
}

var res = bubbleSort(arr)

console.log(res) // => [1, 1, 2, 2, 3, 4, 4, 5, 12, 23, 32, 44, 45]
```