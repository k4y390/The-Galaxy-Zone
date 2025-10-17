function backgroundchanger(el) {
  var className = el.getAttribute("class");
  if(className=="light") {
    el.className = "dark";
    var text = "?theme=dark";
    var url = document.getElementsByClassName("menu");
    var menuItems = url.length;
    let i = 0;
    while (i < menuItems){
      url[i].getAttribute("href");
      url[i].setAttribute("href",url[i]+text);
      console.log(url[i].href);
      i++;
    }
  }else {
    el.className = "light";
    var url = document.getElementsByClassName("menu");
    var menuItems = url.length;
    let i = 0;
    while (i < menuItems) {
      var queryURL = url[i].getAttribute("href");
      var newHref = queryURL.split("?");
      url[i].setAttribute("href",newHref[0]);
      console.log(url[i].href);
      i++;
    }
  }
}
  
function loadTheme() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const theme = urlParams.get('theme');
  if(theme == "dark") {
    document.getElementById("themeswitcher").className = "dark";
    var text = "?theme=dark";
    var url = document.getElementsByClassName("menu");
    var menuItems = url.length;
    let i = 0;
    while (i < menuItems) {
    url[i].getAttribute("href");
    url[i].setAttribute("href",url[i]+text);
    console.log(url[i].href);
    i++;
    }
  } else {
    document.getElementById("themeswitcher").className = "light";
  }
}