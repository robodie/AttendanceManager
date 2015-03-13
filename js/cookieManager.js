function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        }

function setLoginCookie() {
        console.log("error");
            var uvalue = document.forms["login"]["email"].value;
            var pvalue = document.forms["login"]["password"].value;
    
            var d = new Date();
            var exdays = 5;
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            console.error("User: " + uvalue + " - Pass: " + pvalue);
            document.cookie = "user =" + uvalue + "; " + expires;
            document.cookie = "pass =" + pvalue + "; " + expires;
        }

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie(cname) {
    var user = getCookie("user");
    if (user != "") {
    }
}