function encryptText(text) {
    return btoa(text);
  }
  let originalText = prompt("Wpisz wartość do enkrypcji!");
  const encryptedText = encryptText(originalText);
  console.log("Zaszyfrowana wartość: " + encryptedText); //zwraca wpisaną wartość
  console.log("Odszyfrowana wartość: " + atob(encryptedText)); //zwraca odszyfrowaną wartość