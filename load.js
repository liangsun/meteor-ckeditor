var head = document.getElementsByTagName('head')[0];

//Generate a style tag
var style = document.createElement('link');
style.type = 'text/css';
style.rel = "stylesheet";
style.href = '//cdn.ckeditor.com/4.5.2/standard/ckeditor.js';

head.appendChild(style);