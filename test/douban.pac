var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+douban", {
    "+douban": function() {
        ;
function FindProxyForURL(url, host) {
    var PROXY = "PROXY tunnel.douban.com:8118; DIRECT";
    var DEFAULT = "DIRECT";

    var domain_list = [
        "amazonaws.com",
        "archive.org",
        "appspot.com",
        "doubleclick.net",
        "bit.ly",
        "blogger.com",
        "blogspot.com",
        "blogspot.jp",
        "bloomberg.com",
        "cloudflare.com",
        "cloudfront.net",
        "digg.com",
        "dropbox.com",
        "facebook.com",
        "facebook.net",
        "fastly.net",
        "fbcdn.net",
        "ggpht.com",
        "git-scm.com",
        "github.com",
        "githubusercontent.com",
        "gmail.com",
        "golang.org",
        "goo.gl",
        "google-analytics.com",
        "google.co.jp",
        "google.cn",
        "google.com",
        "google.com.hk",
        "google.com.tw",
        "googleapis.com",
        "googlecode.com",
        "googletagservices.com",
        "googleusercontent.com",
        "googlevideo.com",
        "gravatar.com",
        "gstatic.com",
        "jsbin.com",
        "nytimes.com",
        "openvpn.net",
        "python.org",
        "readthedocs.org",
        "slideshare.net",
        "sstatic.net",
        "t.co",
        "trello.com",
        "trellocdn.com",
        "twimg.com",
        "twitter.com",
        "whatismyipaddress.com",
        "wikipedia.org",
        "wordpress.com",
        "wp.com",
        "youtube.com",
        "soundcloud.com",
        "youtu.be",
        "ytimg.com",
        "yimg.com",
        "ytimg.com",
        "android.com",
        "www.shutterstock.com",
    ]

    for(var i=0; i<domain_list.length; i++){
        if(dnsDomainIs(host, domain_list[i])){
            return PROXY; 
        }
    }

    return DEFAULT;
}


/* End of PAC */;
        return FindProxyForURL;
    }.call(this)
});