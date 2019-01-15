$(document).ready(function() {
 var urlRegion = document.URL.split("/")[3].toLowerCase();
 var heroUrlRegions = ["en-gb", "en-ca", "fr-ca", "en-au", "pt-br", "es-mx", "zh-cn", "en-sg", "da-dk", "ko-kr", "es-ar", "de-at", "fr-be", "nl-be", "es-cl", "es-co", "cs-cz", "fi-fi", "fr-fr", "de-de", "el-gr", "zh-hk", "hu-hu", "en-in", "en-ie", "he-il", "it-it", "ja-jp", "nl-nl", "en-nz", "nb-no", "pl-pl", "pt-pt", "ru-ru", "ar-sa", "sk-sk", "en-za", "es-es", "se-se", "de-ch", "fr-ch", "zh-tw", "tr-tr", "ar-ae"]
 if (heroUrlRegions.indexOf(urlRegion) > -1 ) {
   $(".xb1GamesIntro a").attr("href", "https://www.KG.com/store/top-paid/games/kg");
 }
});

