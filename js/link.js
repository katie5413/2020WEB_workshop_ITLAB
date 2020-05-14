const errorElement = document.getElementById("error");
var count = 0;

// 透過提供回呼函數的方式對「click」事件新增處理器。
// 當元素被點選後會出現「Element clicked!」的彈出訊息。
errorElement.addEventListener("click", function (event) {
  if (count == 0) {
    errorElement.innerHTML =
      "我是連結，但你發現點了不會連到別的地方去，這是因為我沒有告訴他，他要連到哪裡去";
  } else if (count == 1) {
    errorElement.innerHTML = "好了，點一次就可以";
  } else if (count == 3) {
    errorElement.innerHTML = "夠了喔";
  } else if (count == 5) {
    errorElement.innerHTML = "這是JS 小彩蛋，我們之後再教";
  }
  count++;
  consol.log(count);
});
