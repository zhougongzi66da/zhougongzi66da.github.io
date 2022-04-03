window.addEventListener('load', function() {
var changes = document.querySelector('.change').querySelectorAll('div');
var sbpk = document.querySelector('.sbpk');
changes[0].onclick = function () {
    sbpk.style.background = 'url("imgs/sbpk01.jpg") no-repeat';
    sbpk.style.backgroundSize = "cover";
    document.body.style.backgroundImage = "linear-gradient(to right top, rgb(187, 247, 208), rgb(134, 239, 172), rgb(59, 130, 246))";
}
changes[1].onclick = function () {
    sbpk.style.background = 'url("imgs/sbpk02.jpg") no-repeat';
    sbpk.style.backgroundSize = "cover";
    document.body.style.backgroundImage = "linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248))";
}
changes[2].onclick = function () {
    sbpk.style.background = 'url("imgs/sbpk03.jpg") no-repeat';
    sbpk.style.backgroundSize = "cover";
    document.body.style.backgroundImage = "linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))";
}
});
