# 前端导出 Excel

## 步骤

安装依赖

```bash
npm install xlsx --save
```

引入依赖

```js
import * as XLSX from "xlsx";
```

使用

```js
const workbook2blob = (workbook) => {
  // 生成excel的配置项
  const wopts = {
    // 要生成的文件类型
    bookType: "xlsx",
    // // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
    bookSST: false,
    type: "binary",
  };
  const wbout = XLSX.write(workbook, wopts);
  // 将字符串转ArrayBuffer
  function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }
  const buf = s2ab(wbout);
  const blob = new Blob([buf], {
    type: "application/octet-stream",
  });
  return blob;
};

// 将blob对象 创建bloburl,然后用a标签实现弹出下载框
const openDownloadDialog = (blob, fileName) => {
  if (typeof blob === "object" && blob instanceof Blob) {
    blob = URL.createObjectURL(blob); // 创建blob地址
  }
  const aLink = document.createElement("a");
  aLink.href = blob;
  // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，有时候 file:///模式下不会生效
  aLink.download = fileName || "";
  let event;
  if (window.MouseEvent) event = new MouseEvent("click");
  //   移动端
  else {
    event = document.createEvent("MouseEvents");
    event.initMouseEvent(
      "click",
      true,
      false,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
  }
  aLink.dispatchEvent(event);
};
const exportBtn = () => {
  exportExcel();
};
const exportExcel = () => {
  const sheet1data = [
    { 部门: "行政部", 数量: 2 },
    { 部门: "前端部", 数量: 3 },
  ];
  const sheet2data = [
    { 姓名: "张三", 事件: "整理文件" },
    { 姓名: "李四", 事件: "打印" },
  ];
  const sheet3data = [
    { 名称: "王五", 工种: "Vue" },
    { 名称: "二楞", 工种: "react" },
  ];
  const sheet1 = XLSX.utils.json_to_sheet(sheet1data);
  const sheet2 = XLSX.utils.json_to_sheet(sheet2data);
  const sheet3 = XLSX.utils.json_to_sheet(sheet3data);
  console.log(sheet1, sheet2, sheet3, "sheet123");
  // 创建一个新的空的workbook
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, sheet1, "部门统计");
  XLSX.utils.book_append_sheet(wb, sheet2, "行政部");
  XLSX.utils.book_append_sheet(wb, sheet3, "前端部");
  const workbookBlob = workbook2blob(wb);
  openDownloadDialog(workbookBlob, "部门统计.xls");
};
```
