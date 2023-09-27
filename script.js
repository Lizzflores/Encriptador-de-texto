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
}
