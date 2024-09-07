function convertToBinary() {
    const sentenceInput = document.getElementById('sentence-input');
    const sentence = sentenceInput.value;
    // Convert sentence to binary text
    let binary = '';
    for (let i = 0; i < sentence.length; i++)
    {
      const charCode = sentence.charCodeAt(i);
      const binaryChar = charCode.toString(2);
      binary += binaryChar + ' ';
    }
    
    // Display binary code on the page
    const binaryOutput = document.getElementById('binary-output');
    binaryOutput.textContent = binary;
  }
