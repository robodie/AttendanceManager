function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        }

function setLoginCookie() {
            var uvalue = document.forms["login"]["email"].value;
            var pvalue = document.forms["login"]["password"].value;
    
            var d = new Date();
            var exdays = 5;
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
    
            document.cookie = "user =" + uvalue + "; " + expires;
            document.cookie = "pass =" + pvalue + "; " + expires;
            window.location.href = "index.html";
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
    if (getCookie(cname) != "") {
        return true;
    }
    return false;
}

function logOut(){
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'pass=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href = "login.html";
}