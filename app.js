// var result = document.querySelector("#result");

// var a = document.addEventListener("mousemove", function (e) {
//   result.style.left = `${e.clientX}px`;
//   result.style.top = `${e.clientY}px`;
// });

var imgList = document.querySelectorAll(".zoomer img");
var mirror = document.querySelector("#mirror");
let scope = 4;

imgList.forEach(function (img) {
  img.addEventListener("mousemove", function (e) {
    mirror.classList.remove("hide");

    mirror.style.top = `${e.clientY}px`;
    mirror.style.left = `${e.clientX}px`;

    let w = this.offsetWidth;
    let h = this.offsetHeight;

    let mouseWithImgBorderX = e.pageX - this.offsetLeft;
    let mouseWithImaBorderY = e.pageY - this.offsetTop;

    let percentMouseByW = (mouseWithImgBorderX / w) * 100;
    let percentMouseByY = (mouseWithImaBorderY / h) * 100;

    mirror.style.backgroundPosition = `${percentMouseByW}% ${percentMouseByY}%`;

    var duongDan = e.target.getAttribute("src");

    mirror.style.backgroundImage = `url(${duongDan})`;
  });

  img.addEventListener("mouseleave", function (e) {
    mirror.classList.add("hide");
  });
});
