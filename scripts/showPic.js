// 改变显示图片的方式让他在同一页面加载
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    description.firstChild.nodeValue = text;
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
            showPic(this);
            return false;
        }
    }
}