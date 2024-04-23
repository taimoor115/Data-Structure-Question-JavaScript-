// Function to encrypt text using Caesar cipher
function caesarEncrypt(text, shift) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char.match(/[a-zA-Z]/)) {
      let isUpperCase = char === char.toUpperCase();
      char = char.toLowerCase();
      let code = char.charCodeAt(0);
      code = ((((code - 97 + shift) % 26) + 26) % 26) + 97;
      char = String.fromCharCode(code);
      if (isUpperCase) {
        char = char.toUpperCase();
      }
    }

    result += char;
  }

  return result;
}

// Function to decrypt text encrypted with Caesar cipher
function caesarDecrypt(text, shift) {
  return caesarEncrypt(text, 26 - shift);
}

// Example usage
const plaintext = "Hello, World!";
const shift = 3;
const encryptedText = caesarEncrypt(plaintext, shift);
const decryptedText = caesarDecrypt(encryptedText, shift);

console.log("Original: " + plaintext);
console.log("Encrypted: " + encryptedText);
console.log("Decrypted: " + decryptedText);
