const btnEncoder = document.getElementById("btnEncoder");
const btnDecoder = document.getElementById("btnDecoder");
const btnCopy = document.getElementById("btnCopy");

let decoderTextarea = document.getElementById("decoder-text").value;
let textResult = document.getElementById("textareaResult");





let encryptMessage = "";
let decryptMessage = ""; 


function hideElements(){
  decoderTextarea = document.getElementById("decoder-text").value;

  let showItem = document.getElementById("show");
  let textResult = document.getElementById("textResult");
  
  if(decoderTextarea === ""){
    showItem.style.display = "block";
    textResult.style.display = "none";

    // dynamicResultSection()
  }
  
  if(decoderTextarea !== ""){
    showItem.style.display = "none";
    textResult.style.display = "block"; 
    
    // dynamicResultSection()

  }

}

function dynamicResultSection(){

  let widthScreen = screen.width;

  decoderTextarea = document.getElementById("decoder-text").value;

  let resultArea = document.getElementById("resultArea");

  if(widthScreen < 1024) {
    
    if(decoderTextarea !== "") {
      resultArea.style.height = "595px";
    }else {
      resultArea.style.height = "137px";
    }
  }
  if (widthScreen > 1024) {
    resultArea.style.height = "94.4rem";
  }
}


function encryptText(){
  hideElements();
  dynamicResultSection()

  decryptMessage = decoderTextarea.trim();
  decryptMessage = decryptMessage.toLowerCase();

  encryptMessage = decryptMessage.replace(/e/g, "enter");
  encryptMessage = encryptMessage.replace(/i/g, "imes");
  encryptMessage = encryptMessage.replace(/a/g, "ai");
  encryptMessage = encryptMessage.replace(/o/g, "ober");
  encryptMessage = encryptMessage.replace(/u/g, "ufat");


  // resultArea.style.height = "fit-content(595px)";

  textResult.value  = encryptMessage;


}

function decryptText(){
  hideElements();
  dynamicResultSection()

  encryptMessage = decoderTextarea.trim();
  encryptMessage = encryptMessage.toLowerCase();

  decryptMessage = encryptMessage.replace(/enter/g, "e");
  decryptMessage = decryptMessage.replace(/imes/g, "i");
  decryptMessage = decryptMessage.replace(/ai/g, "a");
  decryptMessage = decryptMessage.replace(/ober/g, "o");
  decryptMessage = decryptMessage.replace(/ufat/g, "u");

  
  textResult.value  = decryptMessage;

}

function copyText(){
  textResult.select();
  textResult.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textResult.value);
  
  console.log("copied text: " + textResult.value);
}




dynamicResultSection();

hideElements();

btnEncoder.onclick = encryptText;
btnDecoder.onclick = decryptText;
btnCopy.onclick = copyText;

