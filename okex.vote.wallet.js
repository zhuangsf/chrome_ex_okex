var fn_target = (document.body || document.documentElement);
fn_target.appendChild(function() {
	var s = document.createElement('script');
	s.src = chrome.extension.getURL("jquery-3.3.1.min.js");
	console.log("add jquery 2 s="+s);
	return s;
}());
fn_target.appendChild(function() {
	var s = document.createElement('script');
	s.src = chrome.extension.getURL("wallet.js");
	console.log("add jquery 1 s="+s);
	return s;
}());
console.log("add jquery 3 ");

