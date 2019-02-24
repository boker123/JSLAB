// show picture in a page
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

//separate js and html's code graceful degradation
function prepareGallery() {
    //test if browser support and selector exist
    if(!document.getElementsByTagName) 
        return false;
    if(!document.getElementById)
        return false;
    if(!document.getElementById("imagegallery"))
        return false;
    //create variable
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    //add onclickevent to each element
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function() {
            return !showPic(this);
        }
    }
}

function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    }
    else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    document.body.appendChild(placeholder);
    document.body.appendChild(description);
}

//same as mian function
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

//final call up
addLoadEvent(prepareGallery)