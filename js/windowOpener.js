//JavaScript
window.onload = function(){
  var a = document.querySelectorAll('.opener'), w = [], url, random, i;//'.opener' can be replaced to reference diffent sets of links and/or css
  for(i = 0; i < a.length; i++){
    (function(i){
      a[i].onclick = function(e) {
        if (!w[i] || w[i].closed) {
          url = this.href;
          random = Math.floor((Math.random() * 100) + 1); //Remove this line if you don't want different links to open in seperate windows
          w[i] = window.open(url, "_blank", random, "menubar = 0, scrollbars = 0"); //If removing the above line don't forget to remove the random reference in this line
        } else {
          console.log('window ' + url + ' is already opened');
        }
        e.preventDefault();
        w[i].focus();
      };
    })(i);
  }
};