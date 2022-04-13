// ==UserScript==
// @name        Hacker News Styling
// @namespace   Violentmonkey Scripts
// @match       https://news.ycombinator.com/*
// @grant       none
// @version     1.1
// @author      Sadir
// @description 4/11/2022, 9:30:31 AM
// ==/UserScript==


(function () {
  
  const style = document.createElement("style");
  document.body.appendChild(style);
  style.sheet.insertRule("body, .title, .comment, .pagetop, .default, td { font-size: 1rem; }");
  style.sheet.insertRule(".subtext, .comhead, .yclinks { font-size: .8rem; }");
  style.sheet.insertRule("#hnmain { background-color: none; max-width: 50em; min-width: none; }");
  style.sheet.insertRule("body { background-color: rgb(246, 246, 239); }");
  style.sheet.insertRule(".itemlist { padding: .3em .7em; }");
  style.sheet.insertRule(".fatitem { background-color: #fff;  box-shadow: 0 1px 3px rgba(0, 0, 0, .2); width: 100%; }");
  
})();
