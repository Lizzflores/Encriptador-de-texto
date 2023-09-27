function encrypt() {
  var textarea = document.getElementById("textToDeEncrypt");
  var textareaValue = textarea.value;
  var stringToLowerCase = textareaValue.toLowerCase();
  var encryptText = [];

  for (i = 0; i < stringToLowerCase.length; i++) {
    var character = stringToLowerCase.charAt(i);

    if (character === "e") {
      encryptText.push("enter");
    } else if (character === "i") {
      encryptText.push("imes");
    } else if (character === "a") {
      encryptText.push("ai");
    } else if (character === "o") {
      encryptText.push("ober");
    } else if (character === "u") {
      encryptText.push("ufat");
    } else {
      encryptText.push(character);
    }
  }

  var messageEncrypted = encryptText.join("");
  document.getElementById("encryptText").style.display = "inline";

  var messageElement = document.getElementById("encryptText");
  messageElement.innerHTML = `
      <p class="encryptedParagraph" id="messageEncrypted">${messageEncrypted}</p>
      <button id= "copyButton" class="copy" type="button" onclick="copyText()">Copy</button>
    `;

  textarea.value = "";
}

function copyText() {
  var copyMessageEncrypted =
    document.getElementById("messageEncrypted").textContent;

  var textArea = document.createElement("textarea");
  textArea.value = copyMessageEncrypted;

  document.body.appendChild(textArea);

  textArea.select();
  textArea.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(textArea);

  alert("Copied the text: " + copyMessageEncrypted);
}

function decrypt() {
  var textarea = document.getElementById("textToDeEncrypt");
  var textareaValue = textarea.value;
  var stringToLowerCase = textareaValue.toLowerCase();

  var decryptText = [];

  for (i = 0; i < stringToLowerCase.length; i++) {
    var character = stringToLowerCase.charAt(i);

    if (character === "e") {
      decryptText.push(character);
      i += 4;
    } else if (character === "i") {
      decryptText.push(character);
      i += 3;
    } else if (character === "a") {
      decryptText.push(character);
      i += 1;
    } else if (character === "o") {
      decryptText.push(character);
      i += 3;
    } else if (character === "u") {
      decryptText.push(character);
      i += 3;
    } else {
      decryptText.push(character);
    }
  }

  var messageDecrypted = decryptText.join("");
  document.getElementById("encryptText").style.display = "inline";

  console.log(messageDecrypted);

  var messageElement = document.getElementById("encryptText");
  messageElement.innerHTML = `
        <p class="encryptedParagraph">${messageDecrypted}</p>
        <button id="copyButton" class="copy" type="button" onclick="copyText()">Copy</button>
      `;

  textarea.value = "";
}
