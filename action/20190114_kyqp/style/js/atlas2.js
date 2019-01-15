function atlasTrack(uri)
{
    var timestamp = new Date();

    var qs = "&random=" + Math.ceil(Math.random() * 99999999) + timestamp.getUTCFullYear() + timestamp.getUTCMonth() 
    +  timestamp.getUTCDate() + timestamp.getUTCHours() + timestamp.getUTCMinutes() + timestamp.getUTCSeconds() + timestamp.getUTCMilliseconds();

    var uriPlus = "http://ad.atdmt.com/m/a.js;m=11087202527112?event=" + uri + qs;

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = uriPlus;

    document.getElementsByTagName('head')[0].appendChild(script);
}
