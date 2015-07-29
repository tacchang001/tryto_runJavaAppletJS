
/*
  参考:
 	http://www.melange.co.jp/blog/?p=5826
 	http://stackoverflow.com/questions/4407300/is-it-possible-to-register-a-javascript-event-that-triggers-when-java-applet-is/7150084#7150084
 	http://matometa.link/blog/2015/06/22/java-applet-with-javascript/
	http://wpollock.com/AJava/SignedCodeDemo/
 */

var VMInfo = {
    notify : function(info){
        console.log(info);
        var version = info.version || "";
        var vendor = info.vendor || "";
        window.alert([version, vendor]);
    }
};

/* Attempt to load the applet up to "X" times with a delay. 
 * If it succeeds, then execute the callback function. 
 */
function WaitForAppletLoad(applet_id, attempts, delay, onSuccessCallback, onFailCallback) {
    //Test
    var to = typeof (document.getElementById(applet_id));
    if (to == 'function' || to == 'object') {
        onSuccessCallback(); //Go do it.
        return true;
    } else {
        if (attempts == 0) {
            onFailCallback();
            return false;
        } else {
            //Put it back in the hopper.
            setTimeout(function () {
                WaitForAppletLoad(applet_id, --attempts, delay, onSuccessCallback, onFailCallback);
            }, delay);
        }
    }
}

WaitForAppletLoad("VMInfoApplet", 10, 2000, function () {
    alert(document.VMInfoApplet.getJreVersion());
}, function () {
    alert("Sorry, unable to load the local file browser.");
});

