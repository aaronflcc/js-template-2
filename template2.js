/*jslint browser: true*/
/*global window, document, console*/
/*eslint no-console: "off" */
function doAfterPageLoad() {

}
window.addEventListener("load", doAfterPageLoad);

function action1() {
    console.log("action1 called");
}

function action2() {
    console.log("action2 called");
    
    //Example code: store text fields, and change the
    //content of every paragraph in the second panel
    //to a combination (concatenation) of text strings
    var str = document.form.text1.value;
    var str2 = document.form.text2.value;
    var paragraphs = document.querySelectorAll("#secondPanel p");
    console.log(paragraphs.length);
    for (var i in paragraphs) {
        paragraphs[i].innerHTML = str + ", " + str2;
    }
    
}