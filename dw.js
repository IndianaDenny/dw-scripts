// dw.js
// denny wygant
// version 1.0
// 12-2018


// dwSuperSeach is working
function dwSuperSearch(engine,query){
  const alexa = "https://www.alexa.com/siteinfo/";
  const archive = "https://archive.org/search.php?query=";
  const bing = "https://www.bing.com/search?q=";
  const dogpile = "https://results.dogpile.com/search/web?q=";
  const duckduckgo = "https://duckduckgo.com/?q=";
  const gigablast =  "https://www.gigablast.com/search?q=ajax";
  const google = "https://www.google.com/search?q=";
  const shodan = "https://www.shodan.io/search?query=";
  const yahoo = "https://search.yahoo.com/search?p=";
  const yandex = "https://www.yandex.com/search/?text=";
  const youtube = "https://www.youtube.com/results?search_query=";
  const wikipedia = "https://en.wikipedia.org/wiki/";
   
  let searchStr = "";
 
  //if alexa
  if (engine =="Alexa" || engine == "alexa") {
    //the search string
    searchStr =  alexa + query;    
  }
  
      //if archive
  if (engine =="Archive" || engine == "archive") {
    //the search string
    searchStr =  archive + query;    
  }
  
  //if bing
  if (engine =="Bing" || engine == "bing") {
      //the search string
      searchStr =  bing + query;    
      }
  
  //if dogpile
  if (engine =="Dogpile" || engine == "dogpile") {
    //the search string
    searchStr =  dogpile + query;    
  }
  
    //if duckduckgo
  if (engine =="Duckduckgo" || engine == "duckduckgo") {
    //the search string
    searchStr =  duckduckgo + query;    
  }
  
        //if gigablast
  if (engine =="Gigablast" || engine == "gigablast") {
    //the search string
    searchStr =  gigablast + query;    
  }
    
        //if shodan
  if (engine =="Shodan" || engine == "shodan") {
    //the search string
    searchStr =  shodan + query;    
  }
  
      //if google
  if (engine =="Google" || engine == "google") {
    //the search string
    searchStr =  google + query;    
  }
  
      //if yahoo
  if (engine =="Yahoo" || engine == "yahoo") {
    //the search string
    searchStr =  yahoo + query;    
  }
  
    //if yandex
  if (engine =="Yandex" || engine == "yandex") {
    //the search string
    searchStr =  yandex + query;    
  }
  
  
   //if wikipedia
   if (engine == "Wikipedia" || engine == "wikipedia") {
       //the search string
       searchStr = wikipedia + query;
   }
  
  
  
  
  return searchStr;
   //set the .href in sLink
 
  
}

  
  
  
  
  
  
  return searchStr;
   //set the .href in sLink
 
  
}
