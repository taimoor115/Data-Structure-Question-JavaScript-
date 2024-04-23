// Function to encrypt plaintext using a simple substitution cipher
function encrypt(plaintext, key) {
  plaintext = plaintext.toLowerCase(); // Convert to lowercase for simplicity
  let ciphertext = '';

  for (let i = 0; i < plaintext.length; i++) {
    const char = plaintext[i];
    if (char >= 'a' && char <= 'z') {
      const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0); // Convert 'a' to 0, 'b' to 1, etc.
      const encryptedChar = key[charCode];
      ciphertext += encryptedChar;
    } else {
      ciphertext += char; // Keep non-alphabetical characters unchanged
    }
  }

  return ciphertext;
}

// Function to decrypt ciphertext using the same substitution cipher key
function decrypt(ciphertext, key) {
  ciphertext = ciphertext.toLowerCase(); // Convert to lowercase for simplicity
  let plaintext = '';

  for (let i = 0; i < ciphertext.length; i++) {
    const char = ciphertext[i];
    if (char >= 'a' && char <= 'z') {
      const encryptedChar = char;
      const charIndex = key.indexOf(encryptedChar); // Find the index in the key
      const decryptedChar = String.fromCharCode('a'.charCodeAt(0) + charIndex); // Convert back to original character
      plaintext += decryptedChar;
    } else {
      plaintext += char; // Keep non-alphabetical characters unchanged
    }
  }

  return plaintext;
}

// Example usage
const key = 'bcdefghijklmnopqrstuvwxyza'; // Replace with your desired substitution key
const plaintext = 'Hello, World!';
const ciphertext = encrypt(plaintext, key);
console.log('Encrypted: ' + ciphertext);

const decryptedText = decrypt(ciphertext, key);
console.log('Decrypted: ' + decryptedText);
