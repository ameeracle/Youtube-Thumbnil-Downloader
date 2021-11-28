
/*
/  - Right-click on "Bookmarks" Bar .
/  - Click on "Add Bookmark" .
/  - Name it with anything you choose . 
/  - Add script below in "URL" field . 
/  - Click "Save" . 
*/ 


javascript: (() => {       
let input = prompt('Youtube link ?');    
let spliting = /(watch.v=|\.be\/)([\w\d_])+/g.exec(input)[0];    
let shortcode = /[^watch\.]([\w\d_]{4,})+/g.exec(spliting)[1];    
window.location.href = "https://img.youtube.com/vi/" + shortcode + "/maxresdefault.jpg";    
})();
