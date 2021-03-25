//If you include this javaScript file from a script element
//at the end of the body element...
//You can set up references to page elements here like this:
const numberInput = document.getElementById("number1");
const textInput = document.querySelector("#text2");

//Find a button and decide which function it should invoke
document.getElementById("action1").addEventListener("click", action1);
document.getElementById("action2").addEventListener("click", action2);

//Rename these functions to suit your needs
//right-click and choose "Rename Symbol" so it updates throughout code
function action1() {
    console.log(`action1 called. Inputs: ${numberInput.value}, ${textInput.value}`);
}

function action2() {
    console.log("action2 called");
    
    //Example code: store text fields, and change the
    //content of every paragraph in the second panel
    //to a combination (concatenation) of text strings
    let str = numberInput.value;
    let str2 = textInput.value;
    let paragraphs = document.querySelectorAll("#secondPanel p");
    console.log(paragraphs.length + " paragraphs found.");
    for (let p of paragraphs) {
        p.innerHTML = str + ", " + str2;
    }
    
}