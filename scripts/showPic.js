// 改变图片样式
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    description.firstChild.nodeValue = text;
}