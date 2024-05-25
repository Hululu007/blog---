// ==UserScript==
// @name        强制缩放与桌面模式
// @author      Lemon399
// @description 浏览器ua为手机ua时启用强制缩放，浏览器ua非手机ua时启用桌面模式，脚本菜单可以单独设置桌面模式宽度
// @match       *://*/*
// @exclude    https://sj.qq.com/*
// @grant       GM_registerMenuCommand
// @grant       GM_setValue
// @grant       GM_getValue
// @version     8.1
// @run-at      document-start
// @namespace   https://greasyfork.org/users/452911
// ==/UserScript==
 
const domain = window.location.hostname;
let viewportWidth = GM_getValue(`viewportWidth_${domain}`, 1080);
let userAgent = navigator.userAgent;
 
function setViewportWidth(width) {
  viewportWidth = width;
  GM_setValue(`viewportWidth_${domain}`, width); // 将视口宽度与域名关联存储
  autoChangeScale(); // 更新视口宽度后自动调整缩放比例
}
 
function autoChangeScale() {
  const metaTag = document.querySelector('meta[name=viewport]');
  if (metaTag) {
    const isMobile =
      userAgent.indexOf('Mobile') < 0 &&
      userAgent.indexOf('SymbianOS') < 0 &&
      userAgent.indexOf('SearchCraft') < 0;
 
    metaTag.setAttribute('content', isMobile ? `width=${viewportWidth}` : 'width=device-width,initial-scale=1.0,maximum-scale=10.0,user-scalable=1');
  }
}
 
autoChangeScale();
 
window.onload = function() {
  window.setTimeout(autoChangeScale, 250);
};
 
// 添加菜单命令
GM_registerMenuCommand('设置视口宽度', function() {
  const inputWidth = prompt('请输入视口宽度：', viewportWidth);
  if (inputWidth) {
    const parsedWidth = parseInt(inputWidth, 10);
    if (!isNaN(parsedWidth)) {
      setViewportWidth(parsedWidth);
    } else {
      alert('输入的宽度无效，请输入一个有效的数字！');
    }
  }
});
