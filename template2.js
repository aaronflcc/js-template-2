//If you include this javaScript file from a script element
//at the end of the body element...
//You can set up references to page elements here like this:
const textInput1 = document.getElementById("text1");
const textInput2 = document.querySelector("#text2");

function action1() {
    console.log("action1 called");
}

function action2() {
    console.log("action2 called");
    
    //Example code: store text fields, and change the
    //content of every paragraph in the second panel
    //to a combination (concatenation) of text strings
    let str = textInput1.value;
    let str2 = textInput2.value;
    let paragraphs = document.querySelectorAll("#secondPanel p");
    console.log(paragraphs.length + " paragraphs found.");
    for (let p of paragraphs) {
        p.innerHTML = str + ", " + str2;
    }
    
}