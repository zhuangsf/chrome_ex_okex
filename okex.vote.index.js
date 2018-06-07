(document.head).appendChild(function() {
	var fileref = document.createElement("link");
	fileref.setAttribute("rel", "stylesheet");
	fileref.setAttribute("type", "text/css");
	fileref.setAttribute("href", chrome.extension.getURL("reset.css")); // css reset
	return fileref;
}());
var fn_target = (document.body || document.documentElement);
fn_target.appendChild(function() {
	var s = document.createElement('script');
	s.src = chrome.extension.getURL("index.js");
	return s;
}());