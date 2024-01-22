(function (doc, win) {
var root = doc.documentElement,
resizeEvt ='orientationchange' in window ?'orientationchange' :'resize',
recalc =function () {
var clientWidth = root .clientWidth
root .style.fontSize =14 * (clientWidth / 1920) +'px'
// 若页面要求在一定分辨率内不缩放，可以在此处加逻辑处理。
}
// 如果浏览器不支持addEventListener，则中止
if (!doc.addEventListener)return
win.addEventListener(resizeEvt, recalc, false)
doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
