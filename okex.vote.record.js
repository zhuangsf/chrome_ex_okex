var fn_target = (document.body || document.documentElement);
fn_target.appendChild(function() {
	var s = document.createElement('script');
	s.src = chrome.extension.getURL("record.js");
	return s;
}());