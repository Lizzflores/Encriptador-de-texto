function encrypt() {
  var textarea = document.getElementById("textToEncrypt");
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
      <button id= "copyButton" class="copy" type="button">Copy</button>
    `;
}

function decrypt() {
  var decryptText = [];

  var encryptedMessage =
    document.getElementById("messageEncrypted").textContent;

  for (i = 0; i < encryptedMessage.length; i++) {
    var character = encryptedMessage.charAt(i);

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

  var messageElement = document.getElementById("encryptText");
  messageElement.innerHTML = `
        <p class="encryptedParagraph">${messageDecrypted}</p>
        <button class="copy" type="button">Copy</button>
      `;
}
