// ==UserScript==
// @name         强制缩放1.5
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  。
// @author       You
// @license MIT
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-end
// ==/UserScript==
 
(function() {
    var sc = document.createElement("meta");sc.setAttribute("name", "viewport");sc.setAttribute("content", "width=1.5, initial-scale=1.5, user-scalable=yes");document.head.appendChild(sc);
})();
