# 斐波那契数列

斐波那契数列（Fibonacci sequence），又称黄金分割数列，因数学家莱昂纳多·斐波那契（Leonardo Fibonacci）以兔子繁殖为例子而引入，故又称“兔子数列”，其数值为：1、1、2、3、5、8、13、21、34……在数学上，这一数列以如下递推的方法定 z 义：F(0)=1，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N\*）。

## 定义

斐波那契数列是指这样一个数列：1，1，2，3，5，8，13，21，34，55，89……这个数列从第 3 项开始 ，每一项都等于前两项之和。

## 递推公式

斐波那契数列的递推公式为：F(n)=F(n-1)+F(n-2)，其中 n>=2，n∈N\*。

转换成 js 函数就是：

```js
function fib(n) {
  // 如果是前两项，返回该项
  if (n < 2) {
    return n;
  }
  // 从第三项开始，每一项都是前两项之和
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));
// 55
```

## 通项公式

斐波那契数列的通项公式为：F(n)=[(1+√5)/2]^n/√5。

转换成 js 函数就是：

```js
function fib(n) {
  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  // 因为当n很大的时候，可能会有精度问题，这里使用 Math.round 来四舍五入结果
  return Math.round(Math.pow(phi, n) / Math.sqrt(5));
}

console.log(fib(10));
// 55
```
