const target = document.getElementById('target');

const appName = navigator.appName;
const appVersion = navigator.appVersion;
const os = navigator.platform;
const screenH = window.screen.availHeight;
const screenW = window.screen.availWidth;
const w = window.innerWidth;
const h = window.innerHeight;
const date = new Date();
const options = {year: 'numeric', month: 'long', day: 'numeric'};

const html = `<p>App name : ${appName} <br>
App version: ${appVersion}<br>Operating System: ${os}<br> Screen height: ${screenH}, Screen width: ${screenW}<br>
Current height: ${h}, Current width: ${w}<br> Current date: ${date.toLocaleDateString(
  undefined,
  options
)} Time: ${date.toLocaleTimeString()} `;

target.insertAdjacentHTML('beforeend', html);
