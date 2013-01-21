function onClickHandler(info, tab) {
    url = "";
    if(info.menuItemId == "link") {
        url=info.linkUrl;
    } else if (info.menuItemId == "image") {
        url=info.srcUrl
    }
    url = chrome.extension.getURL("popup.html?url="+url);
    chrome.windows.create({'url':url , 'width':300, 'height':320, 'type': 'popup'}, function(window) {
   });
}

var context = ["link","image"];
chrome.contextMenus.create({"title":"Create QR", "contexts":["link","image"], "id":"parent"});
chrome.contextMenus.create({"title":"Link to QR", "parentId":"parent", "contexts":["link"], "id":"link", "onclick":onClickHandler});
chrome.contextMenus.create({"title":"Image to QR", "parentId":"parent", "contexts":["image"], "id":"image", "onclick":onClickHandler});