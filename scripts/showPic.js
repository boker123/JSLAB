// 改变显示图片的方式让他在同一页面加载
function showPic(whichpic) {
    if(!document.getElementById("placeholder"))
        return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")){
        var description = document.getElementById("description");
        if(whichpic.getAttribute("title") != null)
            var text = whichpic.getAttribute("title");
        else
            var text = "";
        description.firstChild.nodeValue = text;
    }
    return true;
}

//分离js和html代码，并设置平稳退化
function prepareGallery() {
    //测试浏览器支持和检查选择器是否存在
    if(!document.getElementsByTagName) 
        return false;
    if(!document.getElementById)
        return false;
    if(!document.getElementById("imagegallery"))
        return false;
    //创建基本变量
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    //为每一个图片添加onclik事件
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function() {
            return !showPic(this);
        }
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);