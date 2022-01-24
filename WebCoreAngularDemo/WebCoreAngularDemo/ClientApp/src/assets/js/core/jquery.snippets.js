Check if and which key was pressed
$(function() {
    $(document).keypress(function(e){
        switch(e.which){
        // "ENTER"
        case 13:
        alert('enter pressed');
        break;

        // "s"
        case 115:
        alert('s pressed');
        break;

        (...)

        }
    });

});

==================================
Move options from List A to List B
$().ready(function() {
    $('#add').click(function() {
        return !$('#select1 option:selected').appendTo('#select2');
    });
    $('#remove').click(function() {
        return !$('#select2 option:selected').appendTo('#select1');
    });
});

==================================
Center an element on the screen
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
    this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
    return this;
}

//Use the above function as:
$(element).center();

Counting Child Elements
<div id="foo">
<div id="bar"></div>
<div id="baz">
<div id="biz">
</div>
<span><span>
</div>

//jQuery code to count child elements
$("#foo > div").size()

==================================
Test if an element is visible
if($(element).is(":visible") == "true") {
    //The element is Visible
}


==================================
Validate DOB
$("#lda-form").submit(function(){
    var day = $("#day").val();
    var month = $("#month").val();
    var year = $("#year").val();
    var age = 18;
    var mydate = new Date();
    mydate.setFullYear(year, month-1, day);

    var currdate = new Date();
    currdate.setFullYear(currdate.getFullYear() - age);
    if ((currdate - mydate) < 0){
        alert("Sorry, only persons over the age of " + age + " may enter this site");
        return false;
    }
    return true;
});

==================================
Get the index of an element
$("ul > li").click(function () {
    var index = $(this).prevAll().length;
});

==================================
Toggle all checkboxes
var tog = false; // or true if they are checked on load
$('a').click(function() {
    $("input[type=checkbox]").attr("checked",!tog);
    tog = !tog;
});

==================================
Check if Cookies are enabled
$(document).ready(function() {
    var dt = new Date();
    dt.setSeconds(dt.getSeconds() + 60);
    document.cookie = "cookietest=1; expires=" + dt.toGMTString();
    var cookiesEnabled = document.cookie.indexOf("cookietest=") != -1;
    if(!cookiesEnabled){
        //cookies are not enabled
    }
});

==================================
How to see if an image is loaded or not
var imgsrc = 'img/image1.png';
$('<img/>').load(function () {
    alert('image loaded');
}).error(function () {
    alert('error loading image');
}).attr('src', imgsrc);

... set of images
var totalimages  = 10;
var loadedimages = 0;
$("<img/>").load(function() {
    ++loadedimages;
    if(loadedimages == totalimages){
        //All 10 images are loaded
    }
});

==================================
Removed selected text on double click
clearSelection      : function () {
    if(document.selection && document.selection.empty) {
        document.selection.empty();
    } else if(window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
    }
}
$(element).bind('dblclick',function(event){
    //do something
    clearSelection();
});

==================================
Validate email address
var email = 'info@tympanus.net'
if(!(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(email)))
alert('Invalid Email');

==================================
Order a UL element
<ul>
<li>cloud</li>
<li>sun</li>
<li>rain</li>
<li>snow</li>
</ul

var items = $('.to_order li').get();
items.sort(function(a,b){
    var keyA = $(a).text();
    var keyB = $(b).text();

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
});
var ul = $('.to_order');
$.each(items, function(i, li){
    ul.append(li);
});

==================================
Passing parameters to a function called with setTimeout
timeout = setTimeout(function(){myFunction(param)},time);

==================================
Fade out an image, and fade in another one (replacing the previous one)
$('imageelement').fadeOut(function() {
    $(this).load(function() {
        $(this).fadeIn();
    }).attr('src', AnotherSource);
});

==================================
Write your own selectors
//extend the jQuery functionality
$.extend($.expr[':'], {

    //name of your special selector
    moreThanAThousand : function (a){
        //Matching element
        return parseInt($(a).html()) > 1000;
    }
});

$(document).ready(function() {
    $('td:moreThanAThousand').css('background-color', '#ff0000');
});

==================================
Run a function 5 times and stop
var count = 0;
function myFunction() {
    count++;
    if(count > 5) clearInterval(timeout);
    //do something
}
var timeout = setInterval(myFunction, 20000);

==================================
Cancel an ajax request
var req = $.ajax({
type:     "POST",
url:     "someurl",
data:     "id=1",
success: function(){
//something
}
});
//Cancel the Ajax Request
req.abort()

