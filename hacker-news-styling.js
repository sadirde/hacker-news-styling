// ==UserScript==
// @name        Hacker News Styling
// @namespace   Violentmonkey Scripts
// @match       https://news.ycombinator.com/*
// @grant       none
// @version     1.0
// @author      Sadir
// @description 4/11/2022, 9:30:31 AM
// ==/UserScript==


(function () {
  
  const style = document.createElement("style");
  document.body.appendChild(style);
  style.sheet.insertRule("body, .title, .comment, .pagetop, .default, td { font-size: 1rem; }");
  style.sheet.insertRule(".subtext, .comhead, .yclinks { font-size: .8rem; }");
  style.sheet.insertRule("#hnmain { background-color: rgba(255,255,255,.5); max-width: 50em; min-width: none; }");
  style.sheet.insertRule("body { background-color: #f6f6ef; }");
  style.sheet.insertRule(".itemlist { padding: .3em .7em; }");
  
})();
