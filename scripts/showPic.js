function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placehoder");
    placeholder.setAttribute("src",source);
}