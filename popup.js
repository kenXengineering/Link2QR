function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

document.addEventListener('DOMContentLoaded', function () {
  jQuery('#qrcode').qrcode(getUrlVars()["url"]);
});